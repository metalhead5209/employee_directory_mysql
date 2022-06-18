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
   
    dbConnect.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Connected to DB');

        connection.query('SELECT * FROM employees', (err, data) => {
            connection.release();
            if (!err) {
                res.render('index', { data });
            }else (err) => {
                console.log('ERROR', err)
            }
            console.log(data);
        })
    });
  }; 
  
  
  
  
 