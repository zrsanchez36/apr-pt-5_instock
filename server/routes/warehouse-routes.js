const router = require("express").Router();
const { body, validationResult } = require("express-validator");
// const knex = require("knex")(require("../knexfile"));
const warehouseController = require("../controllers/warehouse-controller");

router.route("/:id").get(warehouseController.getSingleWarehouse);
router.route("/").get(warehouseController.index);
router.route("/:id").delete(warehouseController.deleteWarehouse);
router
  .route("/:id/inventories")
  .get(warehouseController.getInventoryFromWarehouse);
router
  .route("/locations/unique")
  .get(warehouseController.getDistinctWarehouseLocations);

module.exports = router;
