import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import WarehouseList from "./components/WarehouseList/WarehouseList";
import Inventory from "./components/Inventory/Inventory";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouse/:id" element={<WarehouseDetails />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
