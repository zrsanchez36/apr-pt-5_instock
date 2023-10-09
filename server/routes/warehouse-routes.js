const express = require("express");
const router = express.router();
const { body, validationResult } = require('express-validator');
const knex = require("knex")(require("../knexfile"));

router.get("/", (req, res) => {
  console.log("Warehouse route");
});



