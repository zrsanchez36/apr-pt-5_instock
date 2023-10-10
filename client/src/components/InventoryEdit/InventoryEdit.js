import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryEdit.scss";
import axios from "axios";
import Button from "../Button/Button";

export default function InventoryEdit(props) {
  const { inventoryId } = useParams();
  const [uniqueWarehouses, getUniqueWarehouses] = useState([]);
  const [uniqueCategory, getUniqueCategory] = useState([]);
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
    axios
      .get(`http://localhost:8080/warehouses/${WarehouseId}`)
      .then((response) => {
        setWarehouseName(response.data.warehouse_name);
      });
  }, [WarehouseId]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventories/category/unique`)
      .then((response) => {
        getUniqueCategory(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/locations/unique`)
      .then((response) => {
        getUniqueWarehouses(response.data);
      });
  }, []);

  const FormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="edit-inventory--section">
      <div className="edit-inventory--header">
        <Button page="back" />
        <h1>Edit Inventory Item</h1>
      </div>
      <div className="edit-inventory--container">
        <form className="edit-inventory__form" onSubmit={FormHandler}>
          <div className="edit-inventory__form__top">
            <h2>Item Details</h2>
            <div className="edit-inventory__form__top--item-name">
              <label className="edit-inventory__form__label">Item Name</label>
              <input
                type="text"
                name="itemName"
                id="itemName"
                className="edit-inventory__form--input"
                placeholder={InventoryDetails.item_name}
              ></input>
            </div>
            <div className="edit-inventory__form__top--item-name">
              <label className="edit-inventory__form__label">Description</label>
              <input
                type="textarea"
                name="itemDescription"
                id="itemDescription"
                className="edit-inventory__form--textarea"
                placeholder={InventoryDetails.description}
              ></input>
            </div>
            <div className="edit-inventory__form__top--item-name">
              <label className="edit-inventory__form__label">Category</label>
              <select name="category" id="category">
                {uniqueCategory.map((category) => (
                  <option value={category.category}>{category.category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="edit-inventory__form__bottom">
            <h2>Item Availability</h2>
            <div className="edit-inventory__form__bottom--status">
              <label className="edit-inventory__form__label">Status</label>
              <input
                type="radio"
                id="inStock"
                name="itemStatus"
                value="In Stock"
              />
              <label className="edit-inventory__form__label">In Stock</label>
              <input
                type="radio"
                id="outOfStock"
                name="itemStatus"
                value="Out of Stock"
              />
              <label className="edit-inventory__form__label">
                Out of Stock
              </label>
            </div>
            <div className="edit-inventory__form__bottom--warehouse">
              <label className="edit-inventory__form__label">Warehouse</label>
              <select name="category" id="category">
                {uniqueWarehouses.map((warehouse) => (
                  <option value={warehouse.id}>
                    {warehouse.warehouse_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <input type="button" value="Cancel"></input>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    </section>
  );
}
