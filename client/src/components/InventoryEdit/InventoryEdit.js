import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryEdit.scss";
import axios from "axios";
import Button from "../Button/Button";

export default function InventoryEdit(props) {
  const { inventoryId } = useParams();
  return (
    <section className="edit-inventory--section">
      <div className="edit-inventory--header">
        <Button page="inventory" />
        <h1>Edit Inventory Item</h1>
      </div>
      <div className="edit-inventory--container">
        <form className="edit-inventory__form">
          <div className="edit-inventory__form__top">
            <h2>Item Details</h2>
            <div className="edit-inventory__form__top--item-name">
              <label className="edit-inventory__form__label">Item Name</label>
              <input
                type="text"
                name="itemName"
                className="edit-inventory__form--input"
                placeholder={props.item_name}
              ></input>
            </div>
            <div className="edit-inventory__form__top--item-name">
              <label className="edit-inventory__form__label">Description</label>
              <input
                type="textarea"
                name="itemName"
                className="edit-inventory__form--textarea"
                placeholder={props.item_name}
              ></input>
            </div>
            <div className="edit-inventory__form__top--item-name">
              <label className="edit-inventory__form__label">Category</label>
              <select name="category" id="category"></select>
            </div>
          </div>
          <div className="edit-inventory__form__bottom">
            <h2>Item Availability</h2>
            <div className="edit-inventory__form__bottom--status">
              <label className="edit-inventory__form__label">Status</label>
              <input
                type="radio"
                name="itemName"
                className="edit-inventory__form--input"
                placeholder={props.item_name}
              ></input>
            </div>
            <div className="edit-inventory__form__bottom--warehouse">
              <label className="edit-inventory__form__label">Warehouse</label>
              <select name="category" id="category"></select>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
