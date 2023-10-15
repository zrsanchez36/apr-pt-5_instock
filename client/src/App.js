import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import InventoryList from "./components/InventoryList/InventoryList";
import Inventory from "./components/Inventory/Inventory";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Footer from "./components/Footer/Footer";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import InventoryEdit from "./components/InventoryEdit/InventoryEdit";
import EditWarehouse from "./components/_editWarehouse/EditWarehouse";
import AddWarehouse from "./components/_editWarehouse/AddWarehouse";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouses" element={<WarehouseList />} />
          <Route
            path="/warehouse/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route path="/inventory" element={<InventoryList />} />

          <Route path="/inventory/new" element={<AddNewInventory />} />
          <Route path="/warehouses/edit/:id" element={<EditWarehouse />} />

          <Route
            path="/inventory/:inventoryId"
            element={<InventoryDetails />}
          />
          <Route
            path="/inventory/edit/:inventoryId"
            element={<InventoryEdit />}
          />
//           <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />

          <Route path="/AddWarehouse" element={<AddWarehouse />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
