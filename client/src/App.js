import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import Inventory from "./components/Inventory/Inventory";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Footer from "./components/Footer/Footer";
import EditWarehouse from "./components/_editWarehouse/EditWarehouse";
import AddWarehouse from "./components/_editWarehouse/AddWarehouse";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouses" element={<WarehouseList />} />
          <Route
            path="/warehouse/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/EditWarehouse" element={<EditWarehouse />} />
          <Route path="/AddWarehouse" element={<AddWarehouse />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
