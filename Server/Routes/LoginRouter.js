let express = require("express");
let bodyparser = require("body-parser");
let LoginRouter = express.Router();
const Encrypter = require("../Utilities/Encryption");
const { Pool } = require("pg");
const { pool } = require("../config");

require("dotenv").config();
LoginRouter.use(bodyparser.urlencoded({ extended: true }));
LoginRouter.use(express.json());

LoginRouter.route("/").get((req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let table = req.query.type == "client" ? "client" : "seller";
  console.log(req.body);
  const query = `select * from ${table} where email='${email}' and password='${password}'`;

  pool
    .query(query)
    .then((result) => {
      console.log(result.rows);
      if (result.rows.length == 0) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.json({
          msg: "wrong email",
        });
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(result.rows);
      }
    })
    .catch((err) => {
      res.statusCode = 404;
      res.send(err);
    });
});

module.exports = { LoginRouter };
