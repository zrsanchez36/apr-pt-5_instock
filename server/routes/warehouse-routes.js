const router = require("express").Router();
const { body, validationResult } = require("express-validator");
// const knex = require("knex")(require("../knexfile"));
const warehouseController = require("../controllers/warehouse-controller");

router.route("/:id").get(warehouseController.getSingleWarehouse);
router.route("/").get(warehouseController.index);
router.route("/:id").delete(warehouseController.deleteWarehouse);

router.route("/:id")

    .put(
        [
            body('warehouse_name').notEmpty(),
            body('address').notEmpty(),
            body('city').notEmpty(),
            body('country').notEmpty(),
            body('contact_name').notEmpty(),
            body('contact_position').notEmpty(),
            body('contact_phone').notEmpty().matches(/^\+\d{1,3} \(\d{1,4}\) \d{3}-\d{4}$/),
            body('contact_email').isEmail()
        ],
        warehouseController.putWarehouse
);





router.route("/")
    
    .post(
        [
            body('warehouse_name').notEmpty(),
            body('address').notEmpty(),
            body('city').notEmpty(),
            body('country').notEmpty(),
            body('contact_name').notEmpty(),
            body('contact_position').notEmpty(),
            body('contact_phone').notEmpty().matches(/^\+\d{1,3} \(\d{1,4}\) \d{3}-\d{4}$/),
            body('contact_email').isEmail()
        ],
        warehouseController.addNewWarehouse
    );




router
  .route("/:id/inventories")
  .get(warehouseController.getInventoryFromWarehouse);
router
  .route("/locations/unique")
  .get(warehouseController.getDistinctWarehouseLocations);


module.exports = router;
