const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.post("/new", inventoryController.addNewInventory)
router.get('/', inventoryController.getAllInventories)
module.exports = router;
