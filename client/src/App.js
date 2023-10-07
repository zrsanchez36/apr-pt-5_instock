import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import WarehouseList from "./components/WarehouseList/WarehouseList";
import Inventory from "./components/Inventory/Inventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditWarehouse from "./components/_editWarehouse/EditWarehouse";


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/EditWarehouse" element={<EditWarehouse />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
