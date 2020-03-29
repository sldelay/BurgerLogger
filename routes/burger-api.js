
const db = require("../models");

const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    db.Burger.findAll({
        attributes: ["id", "burger_name", "devoured"],
        raw: true,
        order: [['updatedAt', 'DESC']]
    }).then(function (data) {
        res.render('index', {
            data
        })
    });
});

router.post("/api/burger", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger
    }).then(function (data) {
        res.json(data)
    });
});

router.put("/api/burger/:id", function (req, res) {
    db.Burger.update(req.body,
        {
          where: {
            id: req.params.id
          }
        }).then(function(data) {
        res.json(data);
      });
})



module.exports = router;