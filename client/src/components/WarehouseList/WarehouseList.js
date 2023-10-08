import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";
import "./WarehouseList.scss";
import sorticon from "../../assets/Icons/sort-24px.svg";
import deleteicon from "../../assets/Icons/delete_outline-24px.svg";
import editicon from "../../assets/Icons/edit-24px.svg";

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);
  const [deleteWarehouse, setDeleteWarehouse] = useState({});

  const api = process.env.REACT_APP_BASEURL;

  function getWarehouseList() {
    axios
      .get(`${api}/warehouses`)
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getWarehouseList();
  }, []);

  function deleteButtonClick(warehouse) {
    const info = {
      id: warehouse.id,
      title: `Delete ${warehouse.warehouse_name} warehouse?`,
      text: `Please confirm that you’d like to delete ${warehouse.warehouse_name} from the list of warehouses. You won’t be able to undo this action.`,
    };

    setDeleteWarehouse(info);
  }

  return (
    <div className="warehouseList">
      <div className="warehouseList__box">
        <div className="warehouseList__search">
          <h1 className="warehouseList__title">Warehouses</h1>
          <form className="warehouseList__form">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="warehouseList__text"
              />
            </div>
            <Link to={""} className="warehouseList__btn">
              + Add New Warehouse
            </Link>
          </form>
        </div>
      </div>

      <div className="warehouseList__list--tablet">
        <p className="warehouseList__tablet">
          warehouse{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          address{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          contact name{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          contact information
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>

        <p className="warehouseList__tablet">actions</p>
      </div>

      {warehouses.map((warehouse) => (
        <ul key={warehouse.id} className="warehouseList__list">
          <li className="warehouseList__items">
            <div className="warehouseList__container">
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle"> warehouse</div>
                <div className="warehouseList__info">
                  <Link to={""} className="warehouseList__link">
                    <h3>
                      {warehouse.warehouse_name}
                      <img
                        className="warehouseList__icon"
                        src={rightArrow}
                        alt="arrow pointing right"
                      />
                    </h3>
                  </Link>
                </div>
              </div>
              {/* address */}
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">address</div>
                <div className="warehouseList__info">
                  <p>{warehouse.address + ", "}</p>
                  <p>{warehouse.city + ", " + warehouse.country}</p>
                </div>
              </div>
              {/*Contact name and info */}
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">contact name</div>

                <div className="warehouseList__info">
                  {warehouse.contact_name}
                </div>
              </div>

              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">
                  contact information
                </div>
                <div className="warehouseList__info">
                  {warehouse.contact_phone}
                </div>
                <div className="warehouseList__info">
                  {warehouse.contact_email}
                </div>
              </div>
              <div className="warehouseList__item warehouseList__item--last">
                <div className="warehouseList__delete">
                  <img
                    src={deleteicon}
                    alt="delete icon"
                    onClick={() => deleteButtonClick(warehouse)}
                  />
                </div>
                <Link to={`/warehouses/edit/${warehouse.id}`}>
                  <div className="warehouseList__edit">
                    <img src={editicon} alt="edit icon" />
                  </div>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default WarehouseList;
