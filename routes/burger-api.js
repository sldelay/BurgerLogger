
const db = require("../models");

const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
 
        res.render("index", {
            id: dbBurger.id,
            burger: dbBurger.burger_name,
            devoured: dbBurger.devoured
        });
      });
  });

  module.exports = router;