import React from "react";
import WarehouseEditForm from "./WarehouseEditForm";
import "./editWarehouse.scss";
import {ReactComponent as EditArrow} from "../../assets/assets/Icons/arrow_back-24px.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


function EditWarehouse() {
  const navigate = useNavigate()




  return (
    <section className="edit__warehouse--section">
       <div className="edit__warehouse--header">
            <EditArrow onClick={() => navigate("/warehouses")} /><h1>Edit Warehouse</h1>
          </div>
        <div className="edit__warehouse--container">
          <WarehouseEditForm />
        </div>
    </section>
  );
}

export default EditWarehouse;