import React from "react";
// import Header from "../Header/Header";
import AddWarehouseForm from "./AddWarehouseForm";
import "./editWarehouse.css";
import {ReactComponent as Arrow} from "../../assets/Icons/arrow_back-24px.svg"
import {useNavigate} from "react-router-dom";

function AddWarehouse() {
  const navigate = useNavigate()
  return (
    <section className="edit__warehouse--section">
      <div className="edit__warehouse--header">
            <Arrow onClick={() => navigate("/warehouses")}/><h1>Add new Warehouse</h1>
      </div>
        <div className="edit__warehouse--container">
          <AddWarehouseForm />
        </div>
    </section>
  );
}

export default AddWarehouse;