import React, { useState, useEffect } from "react";
import InventoryButton from "./../InventoryButton/InventoryButton";
import "../AddInventoryForm/AddInventory.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Gear' },
    { id: 3, name: 'Health' },
    { id: 4, name: 'Appreal' },
    { id: 5, name: 'Accesories' },
]

function AddInventorytForm(props) {
    const navigate = useNavigate()
    const [warehouseList, setWarehouseList] = useState([])

    const [formData, setFormData] = useState({
        item_name: '',
        description: '',
        category: '',
        status: '',
        warehouse_id: 0,
        quantity: 0
    })
    const api = process.env.REACT_APP_BASEURL;


    function saveInventoyItem() {
        axios.post(`${api}/inventories/new`, formData).then((response) => {
            if (response.status === 201) {
                alert('Item Added')
            }
        }).catch(err => {
            alert('Error')
            console.log(err)
        })
    }


    function getWarehouseList() {
        axios
            .get(`${api}/warehouses`)
            .then((response) => {
                setWarehouseList(response.data);
                console.log("warehouselist-", response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }


    useEffect(() => {
        getWarehouseList()
    })

    return (
        <div className="edit__form--container">
            <form className="edit__inventory--form">
                <section className="inventory__details">
                    <div className="form__title">
                        <h2>Item Details</h2>
                    </div>
                    <h3>Item Name</h3>
                    <input type="text" id="ItemName" value={formData.item_name} onChange={(e) => setFormData((prev) => ({ ...prev, item_name: e.target.value }))} className="default__form--field" placeholder="Inventory Name"></input>
                    <h3>Description</h3>
                    <textarea rows={5} onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))} className="default__form--textarea" placeholder="Please enter a brief Item discription">{formData.description}</textarea>
                    <h3>Category</h3>
                    <select name="category" id="category" onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))} className="default__form--field minimal">
                        <option value='' selected disabled> Please Select</option>
                        {categories.map(category => (<>
                            <option key={category.id} value={category.name}>{category.name}</option>
                        </>
                        ))}
                    </select>
                </section >
                <section className="contact__details">
                    <div className="form__title">
                        <h2>Item Availability</h2>
                    </div>
                    <div className="form__status">
                        <h3>Status</h3>
                        <div className="form__status--option">
                            <div>
                                <input onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))} type="radio" id="in-stock" name="status" value="In stock" />
                                <label for="in-stock">In stock</label>
                            </div>
                            <div>
                                <input onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))} type="radio" id="out-of-stock" name="status" value="Out of stock" />
                                <label for="out-of-stock">Out of stock</label>
                            </div>
                        </div>
                    </div>
                    {
                        (formData.status !== 'Out of stock') && (
                            <> <h3>Quantity</h3>
                                <input type="number" min={0} value={formData.quantity} onChange={(e) => setFormData(prev => ({ ...prev, quantity: ((formData.status === 'In stock') ? Number(e.target.value) : 0) }))} id="Position" className="default__form--field" defaultValue={1}></input></>
                        )
                    }
                    <h3>Warehouse</h3>
                    <select name="warehouse" id="warehouse" onChange={(e) => setFormData(prev => ({ ...prev, warehouse_id: e.target.value }))} className="default__form--field">
                        <option value='' selected disabled> Please Select</option>
                        {warehouseList.map(warehouse => (<>
                            <option key={warehouse.id} value={Number(warehouse.id)}>{warehouse.warehouse_name}</option>
                        </>
                        ))}
                    </select>
                </section>
            </form>
            <div className='form-inventory__actions'>
                <InventoryButton className="cancel__button" type="submit" label="Cancel" onClick={() => navigate("/inventory")} />
                <InventoryButton className="add__inventory--button" type="submit" label="+ Add Item" onClick={saveInventoyItem} />
            </div>
        </div>
    )
}

export default AddInventorytForm;