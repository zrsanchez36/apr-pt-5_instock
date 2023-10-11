import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./InventoryEdit.scss";
import axios from "axios";
import Button from "../Button/Button";

export default function InventoryEdit(props) {
  const navigate = useNavigate();
  const { inventoryId } = useParams();
  const [uniqueWarehouses, getUniqueWarehouses] = useState([]);
  const [uniqueCategory, getUniqueCategory] = useState([]);
  const [InventoryDetails, setInventoryDetails] = useState([]);
  const [WarehouseId, setWarehouseId] = useState("");
  const [WarehouseName, setWarehouseName] = useState("");
  const [stockStatus, setStockStatus] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventories/${inventoryId}`)
      .then((response) => {
        setInventoryDetails(response.data);
        setWarehouseId(response.data.warehouse_id);
        getWarehouseList(response.data.warehouse_id);
        if (response.data.status == "Out of Stock") {
          setStockStatus(false);
        } else {
          setStockStatus(true);
        }
      });
  }, []);

  // gets every unique category in Inventories Tables

  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventories/category/unique`)
      .then((response) => {
        getUniqueCategory(response.data);
      });
  }, []);

  useEffect(() => {
    if (stockStatus === true) {
      const quantitySection = document.querySelector(
        ".edit-inventory__form__top--quantity"
      );
      quantitySection.classList.remove("invisible");

      const inStockStatus = document.querySelector(".instock");
      const outOfStockStatus = document.querySelector(".outofstock");

      inStockStatus.classList.add("active");
      outOfStockStatus.classList.remove("active");
    }
    if (stockStatus === false) {
      const quantitySection = document.querySelector(
        ".edit-inventory__form__top--quantity"
      );
      quantitySection.classList.add("invisible");
      const inStockStatus = document.querySelector(".instock");
      const outOfStockStatus = document.querySelector(".outofstock");

      inStockStatus.classList.remove("active");
      outOfStockStatus.classList.add("active");
    }
  }, [stockStatus]);

  // gets every unique warehouse location
  const getWarehouseList = (warehouse_id) => {
    axios
      .get(`http://localhost:8080/warehouses/locations/unique`)
      .then((response) => {
        getUniqueWarehouses(response.data);
        for (let i in response.data) {
          if (response.data[i].id === warehouse_id) {
            setWarehouseName(response.data[i].warehouse_name);
          }
        }
      });
  };

  const textHandler = (e) => {
    console.log(e.target.value);
    let updatedText = { item_name: e.target.value };
    setInventoryDetails({ ...InventoryDetails, ...updatedText });
  };

  const textAreaHandler = (e) => {
    console.log(e.target.value);
    let updatedTextArea = { description: e.target.value };
    setInventoryDetails({ ...InventoryDetails, ...updatedTextArea });
  };
  const QuantityHandler = (e) => {
    console.log(e.target.value);
    let updatedQuantity = { quantity: e.target.value };
    setInventoryDetails({ ...InventoryDetails, ...updatedQuantity });
  };

  const FormHandler = (event) => {
    event.preventDefault();
    let currentStatus = "";
    let currentQuantity = 0;
    if (stockStatus === true) {
      currentStatus = "In Stock";
      currentQuantity = InventoryDetails.quantity;
    } else if (stockStatus === false) {
      currentStatus = "Out of Stock";
      currentQuantity = "0";
    }

    if (!InventoryDetails.item_name) {
      console.log("Item Name is Empty");
      return;
    }
    if (!InventoryDetails.description) {
      console.log("Description is Empty");
      return;
    }
    if (!currentQuantity) {
      console.log("Quantity is Empty");
      console.log(typeof currentQuantity);
      return;
    }

    axios
      .put(`http://localhost:8080/inventories/${inventoryId}`, {
        warehouse_id: event.target.warehouse.value,
        item_name: InventoryDetails.item_name,
        description: InventoryDetails.description,
        category: event.target.category.value,
        status: currentStatus,
        quantity: currentQuantity,
      })
      .then((response) => {
        navigate(`/inventory/${inventoryId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="edit-inventory">
      <div className="edit-inventory__header">
        <Button type="back" page="inventoryDetails" inventoryId={inventoryId} />
        <h1 className="edit-inventory__header--text">Edit Inventory Item</h1>
      </div>
      <div className="edit-inventory__container">
        <form className="edit-inventory__form" onSubmit={FormHandler}>
          <div className="edit-inventory__form__information">
            <div className="edit-inventory__form__top">
              <h2 className="edit-inventory__subheader">Item Details</h2>
              <div className="edit-inventory__form__top--item-name">
                <label className="edit-inventory__form__label" for="itemName">Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  id="itemName"
                  className="edit-inventory__form--input"
                  value={InventoryDetails.item_name}
                  placeholder={InventoryDetails.item_name}
                  onChange={(e) => textHandler(e)}
               />
              </div>
              <div className="edit-inventory__form__top--item-name">
                <label className="edit-inventory__form__label" for="itemDescription">
                  Description
                </label>
                <textarea
                  name="itemDescription"
                  rows="6"
                  id="itemDescription"
                  className="edit-inventory__form--textarea"
                  value={InventoryDetails.description}
                  placeholder={InventoryDetails.description}
                  onChange={(e) => textAreaHandler(e)}
                />
              </div>
              <div className="edit-inventory__form__top--item-name">
                <label className="edit-inventory__form__label" for="category">Category</label>
                <select
                  name="category"
                  id="category"
                  className="edit-inventory__form--category"
                >
                  <option value="" selected disabled hidden>
                    {InventoryDetails.category}
                  </option>
                  {uniqueCategory.map((category, index) => (
                    <option key={index} value={category.category}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="edit-inventory__form__bottom">
              <h2 className="edit-inventory__subheader">Item Availability</h2>
              <div className="edit-inventory__form__bottom--status">
                <label className="edit-inventory__form__label">Status</label>
                <div className="edit-inventory__form__bottom--status--radios">
                  <div className="edit-inventory__form__bottom--status--radios--input">
                    <label className="edit-inventory__form__label--status instock">
                      <input
                        type="radio"
                        id="inStock"
                        name="itemStatus"
                        value="In Stock"
                        className="edit-inventory__form__bottom--status--radios--buttons"
                        checked={stockStatus === true}
                        onClick={() => setStockStatus(true)}
                      />
                      In stock
                    </label>
                  </div>
                  <div className="edit-inventory__form__bottom--status--radios--input">
                    <label
                      
                      className="edit-inventory__form__label--status outofstock"
                    >
                      <input
                        type="radio"
                        id="outOfStock"
                        name="itemStatus"
                        value="Out of Stock"
                        className="edit-inventory__form__bottom--status--radios--buttons"
                        checked={stockStatus === false}
                        onClick={() => setStockStatus(false)}
                      />
                      Out of stock
                    </label>
                  </div>
                </div>
                <div className="edit-inventory__form__top--quantity">
                  <label className="edit-inventory__form__label" for="quantity">
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    className="edit-inventory__form--input"
                    value={InventoryDetails.quantity}
                    placeholder={InventoryDetails.quantity}
                    onChange={(e) => QuantityHandler(e)}
                  ></input>
                </div>
              </div>
              <div className="edit-inventory__form__bottom--warehouse">
                <label className="edit-inventory__form__label" for="warehouse">
                  Warehouse
                </label>
                <select
                  name="warehouse"
                  id="warehouse"
                  className="edit-inventory__form--category"
                >
                  <option value="" selected disabled hidden>
                    {WarehouseName}
                  </option>
                  {uniqueWarehouses.map((warehouse, index) => (
                    <option key={index} value={warehouse.id}>
                      {warehouse.warehouse_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="edit-inventory__form__buttons">
            <input
              className="editButton--cancel"
              type="button"
              value="Cancel"
              onClick={() => navigate(`/inventory/${inventoryId}`)}
            ></input>
            <input
              className="editButton--submit"
              type="submit"
              value="Save"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
}
