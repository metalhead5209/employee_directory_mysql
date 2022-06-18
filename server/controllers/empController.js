const mySql = require('mysql');

// DB CONNECTION
const dbConnect = mySql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  


exports.all = (req, res) => {
   
   
    dbConnect.getConnection((err, success) => {
      if (success) {
        console.log(`Connected to ${process.env.DB_NAME} through DB_Port-${success.threadId}`);
      } else if (err) 
        console.log("ERROR", err);

        success.query('SELECT * FROM employees', (err, data) => {
            success.release();
            if (!err) {
                res.render('index');
            }else (err) => {
                console.log('ERROR', err)
            }
            console.log(data);
        })
    });
  }; 
  
  
  
  