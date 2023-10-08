import { Link } from "react-router-dom";
import "./Button.scss";

export default function BackButton(props) {
  if (props.page === "warehouse") {
    return (
      <Link to={"/"}>
        <span className="material-icons md-24 indigo-blue">arrow_back</span>
      </Link>
    );
  }

  if (props.page === "editwarehouse") {
    return (
      <Link to={"/"}>
        <div className="button__edit">
          <span className="material-icons md-18 edit">edit</span>
          <p className="button-text">Edit</p>
        </div>
      </Link>
    );
  }
}
