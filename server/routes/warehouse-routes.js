const router = require("express").Router();
const warehouseController = require("../controllers/warehouse-controller");

router.route("/:id").get(warehouseController.getSingleWarehouse);
router
  .route("/:id/inventories")
  .get(warehouseController.getInventoryFromWarehouse);
module.exports = router;
