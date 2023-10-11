import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryDetails.scss";
import axios from "axios";
import Button from "../Button/Button";
import InventoryDetailsStatus from "../InventoryDetailsStatus/InventoryDetailsStatus";

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
            <Button type="back" page="inventory" />
            <h1 className="inventory-details__info__header">
              {InventoryDetails.item_name}
            </h1>
          </div>
          <Button page="editinventory" inventoryId={InventoryDetails.id} />
        </div>
      </div>

      <div className="inventory-details__info__lower">
        <div className="inventory-details__info__lower-left">
          <h3 className="inventory-details__info__info-header">
            ITEM DESCRIPTION:
          </h3>
          <p className="inventory-details__info__text">
            {InventoryDetails.description}
          </p>
          <h3 className="inventory-details__info__info-header">CATEGORY:</h3>
          <p className="inventory-details__info__text">
            {InventoryDetails.category}
          </p>
        </div>
        <div className="inventory-details__info__lower-right">
          <div className="inventory-details__info__lower-right--statusandquantity">
            <InventoryDetailsStatus status={InventoryDetails.status} />
            <div className="inventory-details__info__lower-right--quantity">
              <h3 className="inventory-details__info__info-header">
                QUANTITY:
              </h3>
              <p className="inventory-details__info__text">
                {InventoryDetails.quantity}
              </p>
            </div>
          </div>
          <h3 className="inventory-details__info__info-header">WAREHOUSE:</h3>
          <p className="inventory-details__info__text">{WarehouseName}</p>
        </div>
      </div>
    </div>
  );
}
