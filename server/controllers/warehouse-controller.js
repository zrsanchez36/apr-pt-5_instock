const knex = require("knex")(require("../knexfile"));

// function for getting details of a single Warehouse
const getSingleWarehouse = (req, res) => {
  knex("warehouses")
    .where({ id: req.params.id })
    .then((warehouseDetails) => {
      if (warehouseDetails === 0) {
        return res.status(404).json({
          message: `Warehouse with ID: ${req.params.id} does not exist`,
        });
      }

      const { created_at, updated_at, ...rest } = warehouseDetails[0];

      const warehouseData = rest;
      res.status(200).json(warehouseData);
    });
};

// function for getting list of inventory for a single warehouse based on ID
const getInventoryFromWarehouse = (req, res) => {
  knex("inventories")
    .where({ warehouse_id: req.params.id })
    .then((WarehouseInventoryList) => {
      if (WarehouseInventoryList === 0) {
        return res.status(404).json({
          message: `Warehouse with ID: ${req.params.id} does not exist`,
        });
      }
      let updatedArray = [];
      for (i in WarehouseInventoryList) {
        const { created_at, updated_at, ...rest } = WarehouseInventoryList[i];
        const newArray = rest;
        updatedArray.push(newArray);
      }
      res.status(200).json(updatedArray);
    });
};

module.exports = { getSingleWarehouse, getInventoryFromWarehouse };
