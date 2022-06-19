const { connection } = require('mongoose');
const mysql = require('mysql');
require("dotenv").config();

// DB CONNECTION
const dbConnect = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  });
  

// Display Employees
exports.all = (req, res) => {
   
   
    dbConnect.getConnection((err, success) => {
      if (success) {
        console.log(`Connected to ${process.env.DB_NAME} through DB_Port-${success.threadId}`);
      } else if (err) 
        console.log("ERROR", err);

        success.query('SELECT * FROM employees', (err, data) => {
          success.release();
          
            if (data) {
              res.render('index', { data });
            } else {
              console.log(err)
            }
            // console.log("Data from Table: \n", data)
        });
    });

  }; 

  

  // Search Employee
    exports.search = (req, res) => {

      dbConnect.getConnection((err, success) => {
        if (success) {
          console.log(`Connected to ${process.env.DB_NAME} through DB_PORT-${success.threadId}`);
        }else if (err) console.log(err);
        let employee = req.body.search;

        success.query('SELECT * FROM employees WHERE first_name LIKE ?', ['%' + employee + '%'], (err, data) => {
          success.release();

          if (data) {
            res.render('index', { data });
          } else {
            console.log(err)
          }
          console.log("Data from table: \n", data);
        });
      });
      
    };
  
 