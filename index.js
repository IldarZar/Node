require('./models/db');

const express = require("express");
const exphbs = require("express-handlebars");
const list = require("./controllers/controller");
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

app.set('views', './views/');
app.engine('hbs', exphbs({ 
    extname: 'hbs', 
    defaultLayout: 'list', 
    layoutsDir: __dirname + '/views/layouts/' 
}))
app.set('view engine', 'hbs');

app.listen(4000);

app.use('/list', list); 
