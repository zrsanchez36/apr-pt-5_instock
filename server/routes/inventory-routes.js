const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.post("/new", inventoryController.addNewInventory)
module.exports = router;
