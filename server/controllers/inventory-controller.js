const knex = require("knex")(require("../knexfile"));

// Add new Inventory Item
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
        throw new Error(`Provided ${warehouse_id} does not exist.`);
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

// DELETE AN INVENTORY ITEM
const deleteInventory = (req, res) => {
  knex("warehouses")
    .delete()
    .where({ id: req.params.warehouse_id })
    .then((affectedRows) => {
      if (affectedRows === 0) {
        res
          .status(400)
          .send(`Inventory with id: ${req.params.warehouse_id} not found`);
      } else {
        res
          .status(204)
          .send(
            `Inventory with id: ${req.params.warehouse_id} has been removed`
          );
      }
    })
    .catch((error) => {
      res
        .status(400)
        .send(
          `Error: unable to remove inventory ${req.params.warehouse_id} ${error}`
        );
    });
};

module.exports = {
  addNewInventory,
  deleteInventory,
};
