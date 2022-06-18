const express = require("express");
const handleBars = require("express-handlebars");
const bodyParser = require("body-parser");
const mySql = require("mysql");
const router = require('./server/routes/employees')

const routes = require('./server/routes/employees')

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5252;

// DB CONNECTION
const dbConnect = mySql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

dbConnect.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Connected to DB');
});

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('/', routes);

// TEMPLATE ENGINE
app.engine("hbs", handleBars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`ON PORT ${PORT}`);
});
