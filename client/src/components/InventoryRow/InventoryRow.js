import "./InventoryRow.scss";
import { useState } from "react";
import closeIcon from "../../assets/Icons/close-24px.svg";

function InventoryRow({
  id,
  itemName,
  category,
  status,
  quantity,
  onConfirm,
  inventoryId,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  if (status === "In Stock") {
    return (
      <li className="inventory-list__items" key={id}>
        <div className="inventory-list__item-name col col-1">
          <p>{itemName}</p>
          <span className="material-icons md-18"> chevron_right</span>
        </div>
        <div className="col col-2">{category}</div>
        <div className="inventory-list__status col col-3">
          <p className="inStock">{status}</p>
        </div>
        <div className="col col-4">{quantity}</div>
        <div className="col col-5">
          <span
            className="material-icons red md-18"
            onClick={() => {
              console.log("clicked");
              openModal();
            }}
          >
            delete_outline
          </span>
          <span className="material-icons blue md-18">edit</span>
        </div>
        {modalOpen && (
          <div className="delete-modal__overlay ">
            <div className="delete-modal">
              <span
                onClick={closeModal}
                className="close delete-modal__btn delete-modal__close-btn"
              >
                <img src={closeIcon} alt="close icon" />
              </span>
              <h1 className="delete-modal__title">
                {`Delete ${itemName} inventory item?`}{" "}
              </h1>
              <p className="delete-modal__text">
                {`Please confirm that you’d like to delete ${itemName}
        from the inventory list. You won’t be able to undo this action.`}
              </p>
              <div className="delete-modal__btns">
                <button className="delete-modal__btn" onClick={closeModal}>
                  Cancel
                </button>

                <button
                  className="delete-modal__btn delete-modal__btn--delete"
                  onClick={() => onConfirm(inventoryId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </li>
    );
  } else {
    return (
      <li className="inventory-list__items" key={id}>
        <div className="inventory-list__item-name col col-1">
          <p>{itemName}</p>
          <span className="material-icons md-18"> chevron_right</span>
        </div>
        <div className="col col-2">{category}</div>
        <div className="inventory-list__status col col-3">
          <p className="OutOfStock">{status}</p>
        </div>
        <div className="col col-4">{quantity}</div>
        <div className="col col-5">
          <span
            className="material-icons red md-18"
            onClick={() => {
              openModal();
            }}
          >
            delete_outline
          </span>
          <span className="material-icons blue md-18">edit</span>
        </div>
        {modalOpen && (
          <div className="delete-modal__overlay ">
            <div className="delete-modal">
              <span
                onClick={closeModal}
                className="close delete-modal__btn delete-modal__close-btn"
              >
                <img src={closeIcon} alt="close icon" />
              </span>
              <h1 className="delete-modal__title">
                {`Delete ${itemName} inventory item?`}{" "}
              </h1>
              <p className="delete-modal__text">
                {`Please confirm that you’d like to delete ${itemName}
        from the inventory list. You won’t be able to undo this action.`}
              </p>
              <div className="delete-modal__btns">
                <button className="delete-modal__btn" onClick={closeModal}>
                  Cancel
                </button>

                <button
                  className="delete-modal__btn delete-modal__btn--delete"
                  onClick={() => onConfirm(inventoryId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </li>
    );
  }
}

export default InventoryRow;
