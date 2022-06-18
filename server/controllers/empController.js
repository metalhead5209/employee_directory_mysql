const mySql = require('mysql');
require("dotenv").config();

// DB CONNECTION
const dbConnect = mySql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  });
  


exports.all = (req, res) => {
   
   
    dbConnect.getConnection((err, success) => {
      if (!err) {
        console.log(`Connected to ${process.env.DB_NAME} through DB_Port-${success.threadId}`);
      } else if (success) 
        console.log("ERROR", err);

        success.query('SELECT * FROM employees', (err, data) => {
          success.release();
            if (data) {
              res.render('index', { data });
            } else {
              console.log(err)
            }
            console.log("Data from Table: \n", data)
        });
    });
  }; 
  
  
  
