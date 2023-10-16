const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");


router.route("/").get(inventoryController.getAllInventories);
router
  .route("/:id")
  .get(inventoryController.getSingleInventory)
  .put(inventoryController.EditInventory)
  .delete(inventoryController.deleteInventory);
router.route("/category/unique").get(inventoryController.getUniqueCategory);
router.post("/new", inventoryController.addNewInventory);
module.exports = router;
