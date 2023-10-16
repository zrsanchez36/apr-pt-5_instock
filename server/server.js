const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const warehouseRoutes = require("./routes/warehouse-routes");
const inventoryRoutes = require("./routes/inventory-routes");
app.use(express.json());
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(warehouseRoutes);
app.use(inventoryRoutes);

app.use("/warehouses", warehouseRoutes);
app.use("/inventories", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
