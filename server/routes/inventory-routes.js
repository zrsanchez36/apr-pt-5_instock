const express = require("express");
const router = express.router();

router.get("/inventory", (req, res) => {
  console.log("inventory route");
});
