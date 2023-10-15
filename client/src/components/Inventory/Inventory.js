import { useEffect, useState } from "react";
import axios from "axios";
import "./Inventory.scss";
import InventoryRow from "../InventoryRow/InventoryRow";

function Inventory(props) {
  const [inventoryList, setInventoryList] = useState([]);

  const api = process.env.REACT_APP_BASEURL;

  // Use Effect to get Warehouse ID from param and receieve warehouse details
  useEffect(() => {
    if (props.WarehouseInventory) {
      axios
        .get(`${api}/warehouses/${props.WarehouseInventory}/inventories`)
        .then((response) => {
          setInventoryList(response.data);
        });
    }
  }, [props.WarehouseInventory]);

  // Delete inventory item
  function deleteInventoryItem(id) {
    axios
      .delete(`${api}/inventories/${id}`)
      .then(() => {
        // Update the InventoryList by filtering out the deleted item
        setInventoryList((prevInventoryList) =>
          prevInventoryList.filter((item) => item.id !== id)
        );
      })
      .catch((err) => console.log(err));
  }

  // on confirming the delte 
  function confirmDeleteItem(id) {
    deleteInventoryItem(id);
  }

  if (props.WarehouseInventory) {
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
          {inventoryList.map((inventory) => (
            <InventoryRow
              key={inventory.id}
              id={inventory.id}
              itemName={inventory.item_name}
              category={inventory.category}
              status={inventory.status}
              quantity={inventory.quantity}
              onConfirm={confirmDeleteItem}
              inventoryList={inventoryList}
              inventoryId={inventory.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default Inventory;
