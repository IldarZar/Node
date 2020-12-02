require('./models/db');

const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const path = require("path");
const list = require("./controllers/controller");


const app = express();


app.set('views', './views/');
app.engine('hbs', exphbs({ 
    extname: 'hbs', 
    defaultLayout: 'list', 
    layoutsDir: __dirname + '/views/layouts/' 
}))
app.set('view engine', 'hbs');

app.use('/list', list); 

app.listen(4000);
