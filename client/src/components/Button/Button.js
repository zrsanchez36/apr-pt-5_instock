import { Link, useNavigate } from "react-router-dom";
import "./Button.scss";

export default function BackButton(props) {
  const navigate = useNavigate();

  if (props.page === "back") {
    return (
      <span
        className="material-icons md-24 indigo-blue"
        onClick={() => navigate(-1)}
      >
        arrow_back
      </span>
    );
  }

  if (props.page === "editwarehouse") {
    return (
      <Link to={`/warehouses/${props.warehouseId}/edit`}>
        <div className="button__edit">
          <span className="material-icons md-24 edit">edit</span>
          <p className="button-text">Edit</p>
        </div>
      </Link>
    );
  }

  if (props.page === "editinventory") {
    return (
      <Link to={`/inventory/${props.inventoryId}/edit`}>
        <div className="button__edit">
          <span className="material-icons md-24 edit">edit</span>
          <p className="button-text">Edit</p>
        </div>
      </Link>
    );
  }
}
