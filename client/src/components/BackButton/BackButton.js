import { Link, useNavigate } from "react-router-dom";

export default function BackButton(props) {
  if (props.page == "warehouse") {
    return (
      <Link to={"/"}>
        <span className="BackBtn">Back</span>
      </Link>
    );
  }
  if (props.page == "warehouse") {
    return (
      <Link to={"/"}>
        <span className="BackBtn">Back</span>;
      </Link>
    );
  }
}
