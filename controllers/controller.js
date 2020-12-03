const express = require("express");
var router = express.Router(); 
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const User = mongoose.model("User");


router.get('/', (req, res) => {
    res.render('other/add');
});

router.post('/', (req, res) => {
    var user = new User();
    user.userName = req.body.fullName;
    user.email = req.body.email;
    user.save((err, doc) => {
        res.send(doc);
    });
});


module.exports = router;