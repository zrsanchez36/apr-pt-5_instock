import React from "react";
import Header from "../Header/Header";
import WarehouseSearchForm from "./WarehouseSearchForm";


function EditWarehouse() {
  return (
    <section className="edit__warehouse--section">
        <div className="edit__warehouse--container">
          <div className="edit__warehouse--header">
            <h1>Warehouses</h1>
            <WarehouseSearchForm />
          </div>
        </div>
    </section>
  );
}

export default EditWarehouse;