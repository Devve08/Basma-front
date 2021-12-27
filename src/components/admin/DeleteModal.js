import React from "react";
import "./DeleteModal.css";

export default function DeleteModal({ setShowModal, id, deleteCustomer }) {
    const handleDelete = () => {
        deleteCustomer(id)
        setShowModal(false)
    }
  return (
    <div className="delete-modal-container">
      <div className="delete-modal-title">Delete Customer?</div>
      <div className="delete-modal-choice">
        <button onClick={() => setShowModal(false)}>No</button>
        <button onClick={handleDelete}>Yes</button>
      </div>
    </div>
  );
}
