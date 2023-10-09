import React from "react";
import Modal from "react-modal";
import closeIcon from "../../assets/Icons/close-24px.svg";
import "../WarehouseDelete/WarehouseDelete.scss";

function WarehouseDelete({ deleteModalInfo, onCancel, onConfirm }) {
  const modalIsOpen = Object.keys(deleteModalInfo).length > 0;
  // console.log(modalIsOpen);

  return (
    <Modal
      className="delete-modal"
      overlayClassName="delete-modal__overlay"
      ariaHideApp={false} // gets rid of warning in console
      isOpen={modalIsOpen}
      onRequestClose={onCancel}
    >
      <div>
        <button
          className="delete-modal__btn delete-modal__close-btn"
          onClick={onCancel}
        >
          <img src={closeIcon} alt="close icon" />
        </button>

        <h1 className="delete-modal__title">{deleteModalInfo.title}</h1>
        <p className="delete-modal__text">{deleteModalInfo.text}</p>

        <div className="delete-modal__btns">
          <button className="delete-modal__btn" onClick={onCancel}>
            Cancel
          </button>

          <button
            className="delete-modal__btn delete-modal__btn--delete"
            onClick={() => onConfirm(deleteModalInfo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default WarehouseDelete;
