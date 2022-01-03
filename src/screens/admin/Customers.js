import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DeleteModal from "../../components/admin/DeleteModal";
import config from "../../config";
import SessionContext from "../../context/SessionContext";
import "./Customers.css";

export default function Customers() {
  const [showModal, setShowModal] = useState(false);
  const [idForDelete, setIdForDelete] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState("searchbyname");
  const [customers, setCustomers] = useState([]);
  const [pagination, setPagination] = useState(10);
  const [prevCustomers, setPrevCustomers] = useState("");
  const [nextCustomers, setNextCustomers] = useState("");
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const getCustomers = async () => {
    let response = await axios.get(
      `${config.Base_Online}/api/admins/costumers/${pagination}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setNextCustomers(response.data.next_page_url);
    setPrevCustomers(response.data.prev_page_url);
    setCustomers(response.data.data);
  };

  const getNextCustomers = async (searchURL) => {
    try {
      let response = await axios.get(searchURL, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });
      setNextCustomers(response.data.next_page_url);
      setPrevCustomers(response.data.prev_page_url);
      setCustomers(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPrevCustomers = async (searchURL) => {
    let response = await axios.get(searchURL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });
    setNextCustomers(response.data.next_page_url);
    setPrevCustomers(response.data.prev_page_url);
    setCustomers(response.data.data);
  };

  const deleteCustomer = async (id) => {
    await axios.delete(
      `${config.Base_Online}/api/admins/customers/${id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    getCustomers();
  };

  const search = async () => {
    let response = await axios.get(
      `${config.Base_Online}/api/admins/${typeSearch}/?query=${inputSearch}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    setCustomers(response.data);
  };

  const handleChange = (e) => {
    setPagination(e.target.value);
  };

  const handleChangeSearch = (e) => {
    setTypeSearch(e.target.value);
  };

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div className="customers-container">
      <AdminNavbar />
      <div className="customers-container-table">
        <div className="customers-container-table-upper">
          <div className="customers-container-table-upper-search">
            <button className="search-btn" onClick={search}>
              Search
            </button>
            <input onChange={handleSearch} type="text" />
            <select onChange={handleChangeSearch} name="" id="">
              <option value="searchbyname">Filter by Name</option>
              <option value="searchbyemail">Filter by Email</option>
              <option value="searchbyid">Filter by ID</option>
            </select>
          </div>
          <div className="pagination-btn-container">
            {prevCustomers && (
              <button
                className="pagination-btn"
                onClick={() => getPrevCustomers(prevCustomers)}
              >
                <i className="fas fa-chevron-left"></i>
                Prev
              </button>
            )}
            {nextCustomers && (
              <button
                className="pagination-btn"
                onClick={() => getNextCustomers(nextCustomers)}
              >
                Next <i className="fas fa-chevron-right"></i>
              </button>
            )}
          </div>
          <select onClick={getCustomers} onChange={handleChange} name="" id="">
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
          </select>
        </div>
        <table>
          <tr className="customer-info-title">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
          {customers.map((item) => (
            <tr
              onClick={() => setIdForDelete(item.id)}
              className="customer-info"
            >
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>
                <button
                  onClick={() => setShowModal(true)}
                  className="delete-btn-customer"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </table>
        {showModal && (
          <DeleteModal
            setShowModal={setShowModal}
            id={idForDelete}
            deleteCustomer={deleteCustomer}
          />
        )}
      </div>
    </div>
  );
}
