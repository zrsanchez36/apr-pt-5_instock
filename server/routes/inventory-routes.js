const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.post("/new", inventoryController.addNewInventory);
router
  .route("/:id")
  .get(inventoryController.getSingleInventory)
  .put(inventoryController.EditInventory);
router.route("/category/unique").get(inventoryController.getUniqueCategory);
module.exports = router;
