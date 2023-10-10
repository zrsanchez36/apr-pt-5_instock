import { useEffect, useState } from "react";
import axios from "axios";
import "./Inventory.scss";
import InventoryRow from "../InventoryRow/InventoryRow";

function Inventory(props) {
  const [InventoryList, SetInventoryList] = useState([]);

  useEffect(() => {
    if (props.WarehouseInventory) {
      axios
        .get(
          `http://localhost:8080/warehouses/${props.WarehouseInventory}/inventories`
        )
        .then((response) => {
          SetInventoryList(response.data);
        });
    }
  }, []);

  if (props.WarehouseInventory) {
    // Use Effect to get Warehouse ID from param and receieve warehouse details

    return (
      <div className="inventory">
        <ul className="inventory-list">
          <li className="inventory-list__headers">
            <div className="col col-1 header">INVENTORY ITEM</div>
            <div className="col col-2 header">CATEGORY</div>
            <div className="col col-3 header">STATUS</div>
            <div className="col col-4 header">QUANTITY</div>
            <div className="col col-5 header">ACTIONS</div>
          </li>
          {InventoryList.map((inventory) => (
            <InventoryRow
              key={inventory.id}
              itemName={inventory.item_name}
              category={inventory.category}
              status={inventory.status}
              quantity={inventory.quantity}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default Inventory;
