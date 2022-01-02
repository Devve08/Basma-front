import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SessionContext from "../../context/SessionContext";

export default function AdminAverageData() {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const [lastDay, setLastDay] = useState({
    info: { total: "", average: "" },
  });
  const [lastWeek, setLastWeek] = useState({
    info: { total: "", average: "" },
  });
  const [lastMonth, setLastMonth] = useState({
    info: { total: "", average: "" },
  });
  const [lastThreeMonths, setLastThreeMonths] = useState({
    info: { total: "", average: "" },
  });
  const [lastYear, setLastYear] = useState({
    info: { total: "", average: "" },
  });

  const LastDay = async () => {
    let response = await axios.get(`${config.Base_testing}/api/admins/lastday`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });
    setLastDay({ info: { total: response.data, average: response.data } });
  };

  const LastWeek = async () => {
    let response = await axios.get(
      `${config.Base_testing}/api/admins/lastweek`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("hello", response.data);
    setLastWeek({
      info: { total: response.data.total, average: response.data.average },
    });
  };

  const LastMonth = async () => {
    let response = await axios.get(
      `${config.Base_testing}/api/admins/lastmonth`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("hello", response.data);
    setLastMonth({
      info: { total: response.data.total, average: response.data.average },
    });
  };

  const LastThreeMonths = async () => {
    let response = await axios.get(
      `${config.Base_testing}/api/admins/lastthreemonths`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("hello", response.data);
    setLastThreeMonths({
      info: { total: response.data.total, average: response.data.average },
    });
  };

  const LastYear = async () => {
    let response = await axios.get(
      `${config.Base_testing}/api/admins/lastyear`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    setLastYear({
      info: { total: response.data.total, average: response.data.average },
    });
  };

  useEffect(() => {
    LastDay();
    LastWeek();
    LastMonth();
    LastThreeMonths();
    LastYear();
  }, []);

  return (
    <div className="add-costumer-average-registrations">
      <div className="avg-box">
        <div className="avg-title">Last 24 hours</div>
        <div className="avg-total">Total: {lastDay.info.total}</div>
        <div className="avg-perday">Avg/day:{lastDay.info.average}</div>
      </div>
      <div className="avg-box">
        <div className="avg-title">Last week</div>
        <div className="avg-total">Total: {lastWeek.info.total}</div>
        <div className="avg-perday">
          Avg/day: {parseInt(lastWeek.info.average)}
        </div>
      </div>
      <div className="avg-box">
        <div className="avg-title">Last month</div>
        <div className="avg-total">Total: {lastMonth.info.total}</div>
        <div className="avg-perday">
          Avg/day: {parseInt(lastMonth.info.average)}
        </div>
      </div>
      <div className="avg-box">
        <div className="avg-title">Last three months</div>
        <div className="avg-total">Total: {lastThreeMonths.info.total}</div>
        <div className="avg-perday">
          Avg/day: {parseInt(lastThreeMonths.info.average)}
        </div>
      </div>
      <div className="avg-box">
        <div className="avg-title">Last year</div>
        <div className="avg-total">Total: {lastYear.info.total}</div>
        <div className="avg-perday">
          Avg/day: {parseInt(lastYear.info.average)}
        </div>
      </div>
    </div>
  );
}
