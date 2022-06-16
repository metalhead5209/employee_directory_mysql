const express = require('express');
const handleBars = require('express-handlebars');
const bodyParser = require('body-parser');
const mySql = require('mysql');


require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5252;


// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// TEMPLATE ENGINE
app.engine('hbs', handleBars.engine( {extname: '.hbs'}));
app.set('view engine', 'hbs');


// ROUTES
app.get('/', (req, res) => {
    res.render('index');
})


app.listen(PORT, () => {
    console.log(`ON PORT ${PORT}`);
});