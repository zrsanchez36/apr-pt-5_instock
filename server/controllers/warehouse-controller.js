const knex = require("knex")(require("../knexfile"));

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

module.exports = { getSingleWarehouse };
