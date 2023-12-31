import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import axios from 'axios';
import deleteicon from "../../assets/Icons/delete_outline-24px.svg";
import editicon from "../../assets/Icons/edit-24px.svg";
import sorticon from "../../assets/Icons/sort-24px.svg";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";
import "./InventoryList.scss";
import { useNavigate } from 'react-router-dom';
import WarehouseDelete from "../WarehouseDelete/WarehouseDelete";

function InventoryList () {
    const [inventoryList, setInventoryList] = useState([]);
    const [deleteModalInfo, setDeleteModalInfo] = useState({});
    const api = process.env.REACT_APP_BASEURL;
    const navigate = useNavigate()
    const { inventoryId } = useParams();
    const [inventoryDetails, setInventoryDetails] = useState("");
    // const [WarehouseName, setWarehouseName] = useState("");
    
    function deleteButtonClick(inventory) {
      const info = {
        id: inventory.id,
        title: `Delete ${inventory.inventory_name} inventory item?`,
        text: `Please confirm that you’d like to delete ${inventory.inventory_name} from the list of warehouses. You won’t be able to undo this action.`,
      };
      setDeleteModalInfo(info);
    }
  
    function onDeleteModalCancel() {
      setDeleteModalInfo({});
    }
  
    function onDeleteModalConfirm(id) {
      deleteInventory(id);
      setDeleteModalInfo({});
    }





    
    function getInventoryList() {

        // Fetch the list of all inventories from the API
        axios
        .get(`${api}/inventories`)
            .then(response => {
                setInventoryList(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }

        useEffect(() => {
            getInventoryList();
        }, []);







        function deleteInventory(id) {
            axios
              .delete(`${api}/inventories/${id}`)
              .then((response) => {
                getInventoryList(id);
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }


        function deleteButtonClick(inventory) {
            const info = {
              id: inventory.id,
              title: `Delete ${inventory.item_name} ?`,
              text: `Please confirm that you’d like to delete ${inventory.item_name} from the list of warehouses. You won’t be able to undo this action.`,
            };
            setDeleteModalInfo(info);
          }
        
          function onDeleteModalCancel() {
            setDeleteModalInfo({});
          }
        
          function onDeleteModalConfirm(id) {
            deleteInventory(id);
            setDeleteModalInfo({});
          }




    return (
        <div className='inventory__page'>
          <WarehouseDelete
        deleteModalInfo={deleteModalInfo}
        onCancel={onDeleteModalCancel}
        onConfirm={onDeleteModalConfirm}
          />

            <div className="warehouseList__box">
        <div className="warehouseList__search">
          <h1 className="warehouseList__title">Inventory</h1>
          <form className="warehouseList__form">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="warehouseList__text"
              />
            </div>
            <Link to={"/inventory/new"} className="warehouseList__btn">
              + Add New Inventory
            </Link>
          </form>
        </div>
      </div>


        {/* Table Header section */}
      <div className="warehouseList__list--tablet">
        <p className="warehouseList__tablet">
          INVENTORY ITEM{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          CATEGORY{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          STATUS{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          QTY{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          WAREHOUSE{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">actions</p>
      </div>
        {/* End of table header section
         */}
        
        
        {inventoryList.map((inventory) => (
        <ul key={inventory.id} className="warehouseList__list">
          <li className="warehouseList__items">
            <div className="warehouseList__container">
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle"> INVENTORY ITEM</div>
                <div className="warehouseList__info">
                  <Link
                    to={`/inventory/${inventory.id}`}
                    className="warehouseList__link"
                  >
                    <h3>
                      {inventory.item_name}
                      <img
                        className="warehouseList__icon"
                        src={rightArrow}
                        alt="arrow pointing right"
                      />
                    </h3>
                  </Link>
                </div>
              </div>
              {/* status */}
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">Status</div>
                <div className="warehouseList__info">
                  <p>{inventory.status}</p>
                </div>
              </div>
              {/*Category*/}
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">Category</div>

                <div className="warehouseList__info">
                  <p>{inventory.category}</p>
                </div>
              </div>
              {/* Quantity */}
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">
                  QTY
                  </div>
                  <div className="warehouseList__info">
                    {inventory.quantity}
                </div>
              </div>
              
              
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">
                  Warehouse
                </div>
                <div className="warehouseList__info">
                  {inventory.warehouse_name}
                </div>
              </div>


              <div className="warehouseList__item warehouseList__item--last">
                <div className="warehouseList__delete">
                  <img
                    src={deleteicon}
                    alt="delete icon"
                    onClick={() => deleteButtonClick(inventory)}
                  />
                </div>
                <Link to={`/inventory/edit/${inventory.id}`}>
                  <div className="warehouseList__edit">
                    <img src={editicon} alt="edit icon" onClick={() => navigate(`/inventory/${inventory.id}`)}/>
                  </div>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      ))}
        
        
        
        
        </div>
    )
}

export default InventoryList;