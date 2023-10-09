const router = require("express").Router();
const { body, validationResult } = require("express-validator");
// const knex = require("knex")(require("../knexfile"));
const warehouseController = require("../controllers/warehouse-controller");

router.route("/").get(warehouseController.index);
router.route("/:id").delete(warehouseController.deleteWarehouse);

module.exports = router;
