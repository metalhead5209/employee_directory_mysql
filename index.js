const express = require("express");
const handleBars = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const routes = require("./server/routes/empRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5252;

// TEMPLATE ENGINE
app.engine("hbs", handleBars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`ON PORT ${PORT}`);
});
