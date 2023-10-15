const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  knex("warehouses")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Warehouses: ${err}`)
    );
};

// function for getting details of a single Warehouse
const getSingleWarehouse = (req, res) => {
  knex("warehouses")
    .where({ id: req.params.id })
    .then((warehouseDetails) => {
      if (warehouseDetails.length === 0) {
        return res.status(404).json({
          message: `Warehouse with ID: ${req.params.id} does not exist`,
        });
      }
      const warehouseData = {
        id: warehouseDetails[0].id,
        warehouse_name: warehouseDetails[0].warehouse_name,
        address: warehouseDetails[0].address,
        city: warehouseDetails[0].city,
        country: warehouseDetails[0].country,
        contact_name: warehouseDetails[0].contact_name,
        contact_position: warehouseDetails[0].contact_position,
        contact_phone: warehouseDetails[0].contact_phone,
        contact_email: warehouseDetails[0].contact_email,
      };

      res.status(200).json(warehouseData);
    });
};

//Put request API
const putWarehouse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const id = req.params.id;
  const updatedWarehouseData = req.body;

  try {
      // Ensure the ID isn't replaced
      if (updatedWarehouseData.id && updatedWarehouseData.id !== id) {
          return res.status(400).json({ error: 'ID replacement is not allowed.' });
      }

      const rowsUpdated = await knex('warehouses')
          .where('id', id)
          .update(updatedWarehouseData);

      if (rowsUpdated === 0) {
          return res.status(404).json({ error: 'Warehouse ID not found' });
      }

      const updatedWarehouse = await knex('warehouses')
          .where('id', id)
          .first();

      res.status(200).json(updatedWarehouse);
  } catch (error) {
      console.error("Error updating warehouse:", error);
      res.status(500).json({ error: 'Database error' });
  }
};
        


// function for getting list of inventory for a single warehouse based on ID
const getInventoryFromWarehouse = (req, res) => {
  knex("inventories")
    .where({ warehouse_id: req.params.id })
    .then((WarehouseInventoryList) => {
      if (WarehouseInventoryList === 0) {
        return res.status(404).json({
          message: `Warehouse with ID: ${req.params.id} does not exist`,
        });
      }
      let updatedArray = [];
      for (i in WarehouseInventoryList) {
        const { created_at, updated_at, ...rest } = WarehouseInventoryList[i];
        const newArray = rest;
        updatedArray.push(newArray);
      }
      res.status(200).json(updatedArray);
    });
};

// Deleting warehouse
const deleteWarehouse = (req, res) => {
  knex("warehouses")
    .delete()
    .where({ id: req.params.id })
    .then((affectedRows) => {
      if (affectedRows === 0) {
        res.status(404).send(`Warehouse with id: ${req.params.id} not found`);
      } else {
        res
          .status(204)
          .send(`Warehouse with id: ${req.params.id} has been removed`);
      }
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error: unable to remove warehouse ${req.params.id} ${err}`)
    );
};


//Add warehouse function 
const addNewWarehouse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const newWarehouse = req.body;

  try {
      const [newWarehouseId] = await knex('warehouses').insert(newWarehouse);
      const newWarehouseRecord = await knex('warehouses').where('id', newWarehouseId).first();
      res.status(201).json(newWarehouseRecord); 
  } catch (error) {
      console.error("Error adding warehouse:", error);
      res.status(500).json({ error: 'Database error' });
  }
};


const getDistinctWarehouseLocations = (req, res) => {
  knex("warehouses")
    .distinct("id", "warehouse_name")
    .then((uniqueWarehouses) => {
      res.status(200).json(uniqueWarehouses);
    });
};


module.exports = {
  router,
  index,
  deleteWarehouse,
  getSingleWarehouse,
  getInventoryFromWarehouse,
  getDistinctWarehouseLocations,
  putWarehouse, 
  addNewWarehouse,
};
