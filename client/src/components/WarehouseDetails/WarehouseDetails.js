import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import axios from "axios";
import BackButton from "../BackButton/BackButton";

export default function WarehouseDetails() {
  const warehouse = 1;
  const { warehouseId } = useParams();
  const [WarehouseDetails, setWarehouseDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse/${warehouse}`)
      .then((response) => {
        setWarehouseDetails(response.data);
      });
  }, []);

  return (
    <div className="warehouse-details">
      <div className="warehouse-details__upper">
        <div className="warehouse-details__upper--left">
          <BackButton page="warehouse" />
          <h1 className="warehouse-details__header">
            {WarehouseDetails.warehouse_name}
          </h1>
        </div>
        <span>Edit</span>
      </div>
      <div className="warehouse-details__lower">
        <div className="warehouse-details__lower-left">
          <h3 className="label__header">Warehouse Address:</h3>
          <p>{WarehouseDetails.address}</p>
        </div>
        <div className="warehouse-details__lower-right">
          <div className="warehouse-details__lower-right--contact">
            <h3 className="label__header">Contact Name:</h3>
            <p>{WarehouseDetails.contact_name}</p>
            <p>{WarehouseDetails.contact_position}</p>
          </div>
          <div className="warehouse-details__lower-right--contact">
            <h3 className="label__header">Contact Information:</h3>
            <p>{WarehouseDetails.contact_phone}</p>
            <p>{WarehouseDetails.contact_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
