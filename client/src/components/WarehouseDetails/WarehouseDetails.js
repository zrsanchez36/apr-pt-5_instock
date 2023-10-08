import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./WarehouseDetails.scss";
import axios from "axios";
import BackButton from "../BackButton/BackButton";

export default function WarehouseDetails() {
  const { warehouseId } = useParams();
  const [WarehouseDetails, setWarehouseDetails] = useState([]);

  // Use Effect to get Warehouse ID from param and receieve warehouse details
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse/${warehouseId}`)
      .then((response) => {
        setWarehouseDetails(response.data);
      });
  }, []);

  return (
    <div className="warehouse-details">
      <div className="warehouse-details__info">
        <div className="warehouse-details__info__upper">
          <div className="warehouse-details__info__upper--left">
            <BackButton page="warehouse" />
            <h1 className="warehouse-details__info__header">
              {WarehouseDetails.warehouse_name}
            </h1>
          </div>
          <span>Edit</span>
        </div>
        <div className="warehouse-details__info__lower">
          <div className="warehouse-details__info__lower-left">
            <h3 className="warehouse-details__info__table-header">
              Warehouse Address:
            </h3>
            <p className="warehouse-details__info__text">
              {WarehouseDetails.address}
            </p>
            <p className="warehouse-details__info__text">
              {WarehouseDetails.city}, {WarehouseDetails.country}
            </p>
          </div>
          <div className="warehouse-details__info__lower-right">
            <div className="warehouse-details__info__lower-right--contact">
              <h3 className="warehouse-details__info__table-header">
                Contact Name:
              </h3>
              <p className="warehouse-details__info__text">
                {WarehouseDetails.contact_name}
              </p>
              <p className="warehouse-details__info__text">
                {WarehouseDetails.contact_position}
              </p>
            </div>
            <div className="warehouse-details__info__lower-right--contact">
              <h3 className="warehouse-details__info__table-header">
                Contact Information:
              </h3>
              <p className="warehouse-details__info__text">
                {WarehouseDetails.contact_phone}
              </p>
              <p className="warehouse-details__info__text">
                {WarehouseDetails.contact_email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
