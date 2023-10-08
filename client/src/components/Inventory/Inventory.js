import { useEffect, useState } from "react";
import axios from "axios";
import "./Inventory.scss";

function Inventory(props) {
  const [InventoryList, SetInventoryList] = useState([]);

  useEffect(() => {
    if (props.WarehouseInventory) {
      axios
        .get(
          `http://localhost:8080/warehouse/${props.WarehouseInventory}/inventories`
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
        <table className="inventory-list">
          <thead>
            <tr className="inventory-list__headers">
              <th>INVENTORY ITEM</th>
              <th>CATEGORY</th>
              <th>STATUS</th>
              <th>QUANTITY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {InventoryList.map((inventory) => (
              <tr className="inventory-list__items" key={inventory.id}>
                <td className="inventory-list__item-name">
                  {inventory.item_name}
                  <span className="material-icons md-18"> chevron_right</span>
                </td>
                <td>{inventory.category}</td>
                <td className="inventory-list__status">{inventory.status}</td>
                <td>{inventory.quantity}</td>
                <td>
                  <span className="material-icons red md-18">
                    delete_outline
                  </span>
                  <span className="material-icons blue md-18">edit</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Inventory;
