import React from "react";
import { Link } from "react-router-dom";
import WarehouseButton from "./WarehouseButton";


function WarehouseEditForm (props) {
   
    const placeholder = props.placeholder;
  
    return(
        <div className="edit__form--container">
            <form className="edit__warehouse--form">
                <section className="warehouse__details">
                    <div className="form__title">
                        <h2>Warehouse Details</h2>
                    </div>
                        <h3>Warehouse Name</h3>
                        <input type="text" id="WarehouseName" className="default__form--field" placeholder={placeholder}></input>
                        <h3>Street Address</h3>
                        <input type="text" id="StreetAddress" className="default__form--field" placeholder={placeholder}></input>
                        <h3>City</h3>
                        <input type="text" id="City" className="default__form--field" placeholder={placeholder}></input>
                        <h3>Country</h3>
                        <input type="text" id="Country" className="default__form--field" placeholder={placeholder}></input>
                </section>
                <section className="contact__details">
                    <div className="form__title">
                        <h2>Contact Details</h2>
                    </div>
                        <h3>Contact Name</h3>
                        <input type="text" id="ContactName" className="default__form--field" placeholder={placeholder}></input>
                        <h3>Position</h3>
                        <input type="text" id="Position" className="default__form--field" placeholder={placeholder}></input>
                        <h3>Phone Number</h3>
                        <input type="text" id="PhoneNumber" className="default__form--field" placeholder={placeholder}></input>
                        <h3>Email</h3>
                        <input type="text" id="Email" className="default__form--field" placeholder={placeholder}></input>
                </section>
                {/* <WarehouseButton className="cancel__button" type="submit" label="cancel" />
                <WarehouseButton className="add__warehouse--button" type="submit" label="Save" /> */}
            </form>
            <div className='form__warehouse--actions'>
                <Link to={`/warehouses`}>
                <WarehouseButton className="cancel__button" type="button" label="Cancel" />
                </Link>
                <WarehouseButton className="add__warehouse--button" type="submit" label="Save" />
            </div>
        </div>
    )
}

export default WarehouseEditForm;