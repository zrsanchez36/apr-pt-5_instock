const knex = require("knex")(require("../knexfile"));

const addNewInventory = (req, res) => {
  console.log("reqbody", req.body);
  const requiredFields = [
    "warehouse_id",
    "item_name",
    "description",
    "category",
    "status",
    "quantity",
  ];
  for (let field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .json({ message: `Missing ${field} in request body` });
    }
  }
  if (typeof req.body.quantity !== "number") {
    return res.status(400).json({ message: "Quantity must be a number." });
  }
  knex("warehouses")
    .where({ id: req.body.warehouse_id })
    .first()
    .then((warehouseExists) => {
      if (!warehouseExists) {
        throw new Error("Provided warehouse_id does not exist.");
      }

      return knex("inventories").insert({
        warehouse_id: req.body.warehouse_id,
        item_name: req.body.item_name,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status,
        quantity: req.body.quantity,
      });
    })
    .then((result) => {
      return knex("inventories").where({ id: result[0] });
    })
    .then((data) => {
      console.log("is it success? ", data);
      res.status(201).send(data[0]);
    })
    .catch((error) => {
      if (error.message === "Provided warehouse_id does not exist.") {
        return res.status(400).json({ message: error.message });
      }
      console.log("error while inserting inventory item", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

const getSingleInventory = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .then((inventoryDetails) => {
      if (inventoryDetails === 0) {
        return res.status(404).json({
          message: `Inventory Item with ID: ${req.params.id} does not exist`,
        });
      }

      const InventoryData = {
        id: inventoryDetails[0].id,
        warehouse_id: inventoryDetails[0].warehouse_id,
        item_name: inventoryDetails[0].item_name,
        description: inventoryDetails[0].description,
        category: inventoryDetails[0].category,
        status: inventoryDetails[0].status,
        quantity: inventoryDetails[0].quantity,
      };
      res.status(200).json(InventoryData);
    });
};

// Function updates inventory item based on changed values
const EditInventory = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      return knex("inventories").where({
        id: req.params.id,
      });
    })
    .then((updatedInventory) => {
      res.json(updatedInventory[0]);
    });
};

module.exports = { addNewInventory, getSingleInventory, EditInventory };
