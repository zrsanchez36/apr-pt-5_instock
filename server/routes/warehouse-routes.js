const express = require("express");
const router = express.router();
const { body, validationResult } = require('express-validator');
const knex = require("knex")(require("../knexfile"));

router.get("/", (req, res) => {
  console.log("Warehouse route");
});

router.put('/api/warehouses/:id', 
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
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const id = req.params.id;
        const data = req.body;

        try {
            // Ensure the ID isn't replaced
            if (data.id && data.id !== id) {
                return res.status(400).json({ error: 'ID replacement is not allowed.' });
            }
            
            const rowsUpdated = await knex('warehouses')
                .where('id', id)
                .update(data);
            
            if (rowsUpdated === 0) {
                return res.status(404).json({ error: 'Warehouse ID not found' });
            }

            const updatedWarehouse = await knex('warehouses')
                .select('*')
                .where('id', id)
                .first();

            return res.status(200).json(updatedWarehouse);
        } catch (error) {
            return res.status(500).json({ error: 'Database error' });
        }
    }
);

module.exports = router;

