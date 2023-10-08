import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import Inventory from "./components/Inventory/Inventory";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
