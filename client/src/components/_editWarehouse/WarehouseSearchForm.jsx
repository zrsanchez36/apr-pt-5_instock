import React from "react";
import {ReactComponent as SearchIcon } from "../../assets/assets/Icons/search-24px.svg";
import WarehouseButton from "./WarehouseButton";


function WarehouseSearchForm (props) {
    const className = props.className;
    const type = props.type;
    const placeholder = props.placeholder;
    const id = props.id;
    return(
        <div className="edit__warehouse--form">
            <input type={type} id={id} className={className} placeholder={placeholder}></input>
            <div className="search__icon"><SearchIcon /></div>
            <WarehouseButton className="add__warehouse--button" type="submit" label="+Add New Warehouse" />
        </div>
    )
}

export default WarehouseSearchForm;