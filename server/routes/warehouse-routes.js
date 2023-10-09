const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const knex = require("knex")(require("../knexfile"));
const warehouseController = require("../controllers/warehouse-controller");

router.route("/:id").get(warehouseController.getSingleWarehouse);
router
  .route("/:id/inventories")
  .get(warehouseController.getInventoryFromWarehouse);

module.exports = router;
