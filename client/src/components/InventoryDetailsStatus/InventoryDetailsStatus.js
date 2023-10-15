import "./InventoryDetailsStatus.scss";

export default function InventoryDetailsStatus(props) {
  if (props.status === "In Stock") {
    return (
      <div className="inventory-details__info__lower-right--top">
        <h3 className="inventory-details__info__info-header">STATUS:</h3>
        <p className="inventory-details__info__text in-stock">{props.status}</p>
      </div>
    );
  } else {
    return (
      <div className="inventory-details__info__lower-right--top">
        <h3 className="inventory-details__info__info-header">STATUS:</h3>
        <p className="inventory-details__info__text out-of-stock">
          {props.status}
        </p>
      </div>
    );
  }
}
