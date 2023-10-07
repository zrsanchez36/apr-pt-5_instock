import { Link, useNavigate, useParams } from "react-router-dom";

function WarehouseList() {
  console.log("WarehouseList component");
  return (
    <Link to={"/warehouse/1"}>
      <span className="BackBtn">Back</span>;
    </Link>
  );
}

export default WarehouseList;
