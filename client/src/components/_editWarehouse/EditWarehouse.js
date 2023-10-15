import React from "react";
import WarehouseEditForm from "./WarehouseEditForm";
import "./editWarehouse.css";
import {ReactComponent as EditArrow} from "../../assets/assets/Icons/arrow_back-24px.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EditWarehouse() {





  return (
    <section className="edit__warehouse--section">
       <div className="edit__warehouse--header">
            <EditArrow /><h1>Edit Warehouse</h1>
          </div>
        <div className="edit__warehouse--container">
          <WarehouseEditForm />
        </div>
    </section>
  );
}

export default EditWarehouse;