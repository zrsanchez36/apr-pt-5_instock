const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");


router.post("/new", inventoryController.addNewInventory)
router.get('/', inventoryController.getAllInventories)
router
  .route("/:id")
  .get(inventoryController.getSingleInventory)
  .put(inventoryController.EditInventory)
  .delete(inventoryController.deleteInventory);
router.route("/category/unique").get(inventoryController.getUniqueCategory);


module.exports = router;
