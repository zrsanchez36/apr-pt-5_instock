import React from "react";
import Header from "../Header/Header";
import AddWarehouseForm from "./AddWarehouseForm";
import "./editWarehouse.css";

function AddWarehouse() {
  return (
    <section className="edit__warehouse--section">
      <div className="edit__warehouse--header">
            <h1>Add new Warehouse</h1>
      </div>
        <div className="edit__warehouse--container">
          <AddWarehouseForm />
        </div>
    </section>
  );
}

export default AddWarehouse;