var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.render("index", {})
})

// Create all our routes?
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger, false ], function(data){
        res.status(201).send();
    })
    
})



module.exports = router;




