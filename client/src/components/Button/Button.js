import { Link, useNavigate } from "react-router-dom";
import "./Button.scss";

export default function BackButton(props) {
  const navigate = useNavigate();

  if (props.type === "back") {
    if (props.page === "inventory") {
      return (
        <span
          className="material-icons md-24 indigo-blue"
          onClick={() => navigate("/inventory")}
        >
          arrow_back
        </span>
      );
    }
    if (props.page === "inventoryDetails") {
      return (
        <span
          className="material-icons md-24 indigo-blue"
          onClick={() => navigate(`/inventory/${props.inventoryId}`)}
        >
          arrow_back
        </span>
      );
    }
    if (props.page === "warehouse") {
      return (
        <span
          className="material-icons md-24 indigo-blue"
          onClick={() => navigate("/warehouses")}
        >
          arrow_back
        </span>
      );
    }
    if (props.page === "warehouseDetails") {
      return (
        <span
          className="material-icons md-24 indigo-blue"
          onClick={() => navigate("/inventory")}
        >
          arrow_back
        </span>
      );
    }
  }

  if (props.page === "editwarehouse") {
    return (
      <Link to={`/warehouses/edit/${props.warehouseId}`}>
        <div className="button__edit">
          <span className="material-icons md-24 edit">edit</span>
          <p className="button-text">Edit</p>
        </div>
      </Link>
    );
  }

  if (props.page === "editinventory") {
    return (
      <Link to={`/inventory/edit/${props.inventoryId}`}>
        <div className="button__edit">
          <span className="material-icons md-24 edit">edit</span>
          <p className="button-text">Edit</p>
        </div>
      </Link>
    );
  }
}
