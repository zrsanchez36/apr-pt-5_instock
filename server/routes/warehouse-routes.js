const router = require("express").Router();
const warehouseController = require("../controllers/warehouse-controller");

router.route("/:id").get(warehouseController.getSingleWarehouse);

module.exports = router;
