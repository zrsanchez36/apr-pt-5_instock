import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import WarehouseList from "./components/WarehouseList/WarehouseList";
import Inventory from "./components/Inventory/Inventory";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
