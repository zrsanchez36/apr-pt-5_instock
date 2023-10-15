const knex = require("knex")(require("../knexfile"));

// Add new Inventory Item
const addNewInventory = (req, res) => {
    console.log("reqbody", req.body)
    const requiredFields = ['warehouse_id', 'item_name', 'description', 'category', 'status', 'quantity'];
    for (let field of requiredFields) {
        console.log('req.body[field] ', req.body[field])
        if (req.body[field] === undefined || req.body[field] === null) {
            return res.status(400).json({ message: `Missing ${field} in request body` });
        }
    }
    if (typeof req.body.quantity !== 'number') {
        return res.status(400).json({ message: 'Quantity must be a number.' });
    }
    knex("warehouses")
        .where({ id: req.body.warehouse_id })
        .first()
        .then(warehouseExists => {
            if (!warehouseExists) {
                throw new Error(`Provided ${req.body.warehouse_id} does not exist.`);
            }
            return knex("inventories")
                .insert({
                    warehouse_id: req.body.warehouse_id,
                    item_name: req.body.item_name,
                    description: req.body.description,
                    category: req.body.category,
                    status: req.body.status,
                    quantity: req.body.quantity,
                });
        })
        .then(result => {
            return knex("inventories").where({ id: result[0] });
        })
        .then(data => {
            console.log('is it success? ', data)
            res.status(201).send(data[0]);
        })
        .catch(error => {
            if (error.message === 'Provided warehouse_id does not exist.') {
                return res.status(400).json({ message: error.message });
            }
            console.log("error while inserting inventory item", error)
            res.status(500).json({ message: 'Internal Server Error' });
        });
};



//function to get all inventories
const getAllInventories = async (req, res) => {
    try {
        const inventories = await knex('inventories')  
            .join('warehouses', 'inventories.warehouse_id', 'warehouses.id')  
            .select('inventories.*', 'warehouses.warehouse_name');  
        
        res.status(200).json(inventories);
    } catch (error) {
        console.error("Error fetching inventories:", error); 
        return res.status(500).json({ error: 'Database error' });
    }
};



const deleteInventory = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .delete()
    .then(() => {
      res
        .status(200)
        .send(`Inventory item with id: ${req.params.id} has been deleted`);
    })
    .catch((err) => {
      res
        .status(404)
        .send(`Could not delete inventory item ${req.params.id}. ${err}`);
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
  if (
    !req.body.warehouse_id ||
    !req.body.item_name ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    !req.body.quantity
  ) {
    return res.status(400).json({
      message: `Missing Properties in request`,
    });
  }
  if (isNaN(req.body.quantity)) {
    return res.status(400).json({
      message: `Quantity must be an number`,
    });
  }
  knex("inventories")
    .where({ id: req.params.id })
    .then((matchedItems) => {
      if (matchedItems.length === 0) {
        return res.status(404).json({
          message: `Inventory Item with ID: ${req.params.id} does not exist`,
        });
      }
      knex("inventories")
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
          return knex("inventories").where({ id: req.params.id });

        })
        .then((updatedInventory) => {
          res.json(updatedInventory[0]);
        });
    });
};

// Function get all unique categories from inventory table

const getUniqueCategory = (req, res) => {
  knex("inventories")
    .distinct("category")
    .then((uniqueCategory) => {
      res.status(200).json(uniqueCategory);
    });
};



module.exports = {
  getAllInventories,
  deleteInventory,
  addNewInventory,
  getSingleInventory,
  EditInventory,
  getUniqueCategory,

};

