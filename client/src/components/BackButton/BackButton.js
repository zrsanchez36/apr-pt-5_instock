import { Link } from "react-router-dom";
import "./BackButton.scss";
import ArrowBack from "../../assets/assets/arrow_back_black_24dp.svg";

export default function BackButton(props) {
  if (props.page === "warehouse") {
    return (
      <Link to={"/"}>
        <span class="material-icons md-24 indigo-blue">arrow_back</span>
      </Link>
    );
  }
  if (props.page === "warehouse") {
    return (
      <Link to={"/"}>
        <span className="BackBtn">Back</span>;
      </Link>
    );
  }
}
