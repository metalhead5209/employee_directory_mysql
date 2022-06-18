const express = require("express");
const handleBars = require("express-handlebars");
const bodyParser = require("body-parser");
const mySql = require("mysql");
const routes = require('./server/routes/employees');
const { json } = require("body-parser");
const { connection } = require("mongoose");



require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5252;

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('/', routes);

// TEMPLATE ENGINE
app.engine("hbs", handleBars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// DB CONNECTION
const dbConnect = mySql.createPool({
  
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

dbConnect.getConnection((err, success) => {
    if (success) {
      console.log(`Connected to ${process.env.DB_NAME} through DB_Port-${success.threadId}`);
    } else if (err) 
      console.log("ERROR", err);

    // if (err) throw err;
    // console.log("connected to " + process.env.DB_NAME + 'through' + connection.threadId);
    
});


app.listen(PORT, () => {
  console.log(`ON PORT ${PORT}`);
});
