const express = require("express");
const handleBars = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const routes = require('./server/routes/empRoutes');





require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5252;


// TEMPLATE ENGINE
app.engine("hbs", handleBars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// // DB CONNECTION
// const dbConnect = mySql.createPool({
//   connectionLimit: 100,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT
// });

// dbConnect.getConnection((err, success) => {
//     if (success) {
//       console.log(`Connected to ${process.env.DB_NAME} through DB_Port-${success.threadId}`);
//     } else if (err) 
//       console.log("ERROR", err);
// });


// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`ON PORT ${PORT}`);
});
