const mysql = require("mysql");
require("dotenv").config();

// DB CONNECTION
const dbConnect = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Display Employees
exports.all = (req, res) => {
  dbConnect.getConnection((err, success) => {
    if (success) {
      console.log(
        `Connected to ${process.env.DB_NAME} through DB_Port-${success.threadId}`
      );
    } else if (err) console.log("ERROR", err);

    success.query("SELECT * FROM employees", (err, data) => {
      success.release();

      if (data) {
        res.render("index", { data });
      } else {
        console.log(err);
      }
      // console.log("Data from Table: \n", data)
    });
  });
};

// Search Employee
exports.search = (req, res) => {
  dbConnect.getConnection((err, success) => {
    if (success) {
      console.log(
        `Connected to ${process.env.DB_NAME} through DB_PORT-${success.threadId}`
      );
    } else if (err) console.log(err);
    let employee = req.body.search;
    success.query(
      "SELECT * FROM employees WHERE first_name LIKE ? OR last_name LIKE ?",
      ["%" + employee + "%", "%" + employee + "%"],
      (err, data) => {
        success.release();

        if (data) {
          res.render("index", { data });
        } else {
          console.log(err);
        }
        // console.log("Data from table: \n", data);
      }
    );
  });
};

exports.new = (req, res) => {
  res.render("new");
};

// Add Employee
exports.create = (req, res) => {
  const { first_name, last_name, email, phone, department } = req.body;
  dbConnect.getConnection((err, success) => {
    if (success) {
      console.log(
        `Connected to ${process.env.DB_NAME} through DB_PORT-${success.threadId}`
      );
    } else if (err) console.log(err);

    success.query(
      "INSERT INTO employees SET first_name = ?, last_name = ?, email = ?, phone = ?, department = ?",
      [first_name, last_name, email, phone, department],
      (err, data) => {
        success.release();

        if (data) {
          res.redirect("/");
        } else {
          console.log(err);
        }
        // console.log("Data from table: \n", data);
      }
    );
  });
};

// Employee Show Page
exports.show = (req, res) => {
  dbConnect.getConnection((err, success) => {
    if (success) {
      console.log(
        `Connected to ${process.env.DB_NAME} through DB_Port-${success.threadId}`
      );
    } else if (err) console.log("ERROR", err);

    success.query(
      "SELECT * FROM employees WHERE id = ?",
      [req.params.id],
      (err, data) => {
        success.release();

        if (data) {
          res.render("show", { data });
        } else {
          console.log(err);
        }
        // console.log("Data from Table: \n", data)
      }
    );
  });
};


// Delete Employee
exports.delete = (req, res) => {
  dbConnect.getConnection((err, success) => {
    if (success) {
      console.log(
        `Connected to ${process.env.DB_NAME} through DB_Port-${success.threadId}`
      );
    } else if (err) console.log("ERROR", err);

    success.query(
      "DELETE FROM employees WHERE id = ?",
      [req.params.id],
      (err, data) => {
        success.release();

        if (data) {
          res.redirect("/");
        } else {
          console.log(err);
        }
      }
    );
  });
};
