const express = require("express");
var router = express.Router(); 

const bodyparser = require("body-parser");

const mongoose = require("mongoose");
const User = mongoose.model("User");



router.get('/', (req, res) => {
    res.send("list");
});

router.post('/add', (req, res) => {
    res.render('other/add');
});

router.get('/add', (req, res) => {
    res.render('other/add');
});


module.exports = router;