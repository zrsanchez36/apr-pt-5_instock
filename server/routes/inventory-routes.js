const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.post("/new", inventoryController.addNewInventory);
router.delete("/:id", inventoryController.deleteInventory);
module.exports = router;
