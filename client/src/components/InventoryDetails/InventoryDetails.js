import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryDetails.scss";
import axios from "axios";
import Button from "../Button/Button";

export default function InventoryDetails() {
  const { inventoryId } = useParams();
  const [InventoryDetails, setInventoryDetails] = useState([]);
  const [WarehouseId, setWarehouseId] = useState("");
  const [WarehouseName, setWarehouseName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventories/${inventoryId}`)
      .then((response) => {
        setInventoryDetails(response.data);
        setWarehouseId(response.data.warehouse_id);
      });
  }, []);

  useEffect(() => {
    console.log(`WarehouseId set as ${WarehouseId}`);
    axios
      .get(`http://localhost:8080/warehouses/${WarehouseId}`)
      .then((response) => {
        setWarehouseName(response.data.warehouse_name);
      });
  }, [WarehouseId]);

  return (
    <div className="inventory-details">
      <div className="inventory-details__info">
        <div className="inventory-details__info__upper">
          <div className="inventory-details__info__upper--left">
            <Button page="inventory" />
            <h1 className="inventory-details__info__header">
              {InventoryDetails.item_name}
            </h1>
          </div>
          <Button
            page="editinventory"
            inventoryDetails={InventoryDetails}
            inventoryId={InventoryDetails.id}
          />
        </div>
      </div>

      <div className="inventory-details__info__lower">
        <div className="inventory-details__info__lower-left">
          <h3 className="inventory-details__info__table-header">
            ITEM DESCRIPTION:
          </h3>
          <p className="inventory-details__info__text">
            {InventoryDetails.description}
          </p>
          <h3 className="inventory-details__info__table-header">CATEGORY:</h3>
          <p className="inventory-details__info__text">
            {InventoryDetails.category}
          </p>
        </div>
        <div className="inventory-details__info__lower-right">
          <div className="inventory-details__info__lower-right--top">
            <h3 className="inventory-details__info__table-header">STATUS:</h3>
            <p className="inventory-details__info__text">
              {InventoryDetails.status}
            </p>
            <h3 className="inventory-details__info__table-header">QUANTITY:</h3>
            <p className="inventory-details__info__text">
              {InventoryDetails.quantity}
            </p>
          </div>

          <h3 className="inventory-details__info__table-header">WAREHOUSE:</h3>
          <p className="inventory-details__info__text">{WarehouseName}</p>
        </div>
      </div>
    </div>
  );
}
