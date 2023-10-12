import { useEffect, useState } from "react";
import axios from "axios";
import "./Inventory.scss";
import InventoryRow from "../InventoryRow/InventoryRow";

function Inventory(props) {
  const [InventoryList, SetInventoryList] = useState([]);

  const api = process.env.REACT_APP_BASEURL;
  console.log(api);

  // Use Effect to get Warehouse ID from param and receieve warehouse details
  useEffect(() => {
    if (props.WarehouseInventory) {
      axios
        .get(`${api}/warehouses/${props.WarehouseInventory}/inventories`)
        .then((response) => {
          SetInventoryList(response.data);
        });
    }
  }, []);

  // Delete inventory item
  function deleteInventoryItem() {
    axios
      .delete(`${api}/inventories/${props.WarehouseInventory}`)
      .then((response) => {
        InventoryList(props.WarehouseInventory);
      })
      .catch((err) => console.log(err));
  }

  // function deleteButtonClick(InventoryList) {
  //   const info = {
  //     id: InventoryList.id,
  //     title: `Delete ${InventoryList.item_name} inventory item?`,
  //     text: `Please confirm that you’d like to delete ${InventoryList.item_name} from the inventory list. You won’t be able to undo this action.`,
  //   };

  // }

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
          {InventoryList.map((inventory) => (
            <InventoryRow
              key={inventory.id}
              itemName={inventory.item_name}
              category={inventory.category}
              status={inventory.status}
              quantity={inventory.quantity}
              // handleClickDelete={deleteInventoryItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default Inventory;
