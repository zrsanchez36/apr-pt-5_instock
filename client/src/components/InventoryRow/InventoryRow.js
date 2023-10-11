import { Link } from "react-router-dom";
import "./InventoryRow.scss";

function InventoryRow({ id, itemName, category, status, quantity }) {
  console.log(id)
  if (status === "In Stock") {
    return (
      <li className="inventory-list__items" key={id}>
        <div className="inventory-list__items--top">
          <div className="inventory-list__items--divider">
<Link to={`/inventory/${id}`}>
            <div className="inventory-list__item-name col col-1">
              <p>{itemName}</p>
              <span className="material-icons md-18"> chevron_right</span>
            </div>
            </Link>
            <div className="col col-2">{category}</div>
          </div>
          <div className="inventory-list__items--divider">
            <div className="inventory-list__status col col-3">
              <p className="inStock">{status}</p>
            </div>
            <div className="col col-4">{quantity}</div>
          </div>
        </div>
        <div className="col col-5">
          <span className="material-icons red md-18">delete_outline</span>
          <span className="material-icons blue md-18">edit</span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="inventory-list__items" key={id}>
        <div className="inventory-list__items--top">
          <div className="inventory-list__items--divider">
            <div className="inventory-list__item-name col col-1">
              <p>{itemName}</p>
              <span className="material-icons md-18"> chevron_right</span>
            </div>
            <div className="col col-2">{category}</div>
          </div>
          <div className="inventory-list__items--divider">
            <div className="inventory-list__status col col-3">
              <p className="OutOfStock">{status}</p>
            </div>
            <div className="col col-4">{quantity}</div>
          </div>
        </div>
        <div className="col col-5">
          <span className="material-icons red md-18">delete_outline</span>
          <span className="material-icons blue md-18">edit</span>
        </div>
      </li>
    );
  }
}

export default InventoryRow;
