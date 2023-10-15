import React from "react";
import AddInventoryForm from "./../AddInventoryForm/AddInventoryForm"
//import {ReactComponent as EditArrow} from "../../assets/assets/Icons/arrow_back-24px.svg";
import { useNavigate } from 'react-router-dom';

function AddNewInventory() {
  const navigate = useNavigate();

  const redirectToInventories = () => {
    navigate('/inventory');
  }

  return (
    <section className="edit__inventory--section">
      <div className="edit__inventory--header">
      <div className='page-header__heading-and-back-container'>
          <button className='page-header__back'onClick={redirectToInventories} />
        <h1 className='page-header__heading'>Add New Inventory Item</h1>
      </div>
      </div>
        <div className="edit__inventory--container">
          <AddInventoryForm />
        </div>
    </section>
  );
}

export default AddNewInventory;