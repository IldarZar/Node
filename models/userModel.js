const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    userName : {
        type: String
    },
    email : {
        type: String
    }
});

mongoose.model('Employee', userSchema);