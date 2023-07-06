let express = require("express");
let bodyparser = require("body-parser");
let LoginRouter = express.Router();
const Encrypter = require("../Utilities/Encryption");
const { pool } = require("../config");

require("dotenv").config();
LoginRouter.use(bodyparser.urlencoded({ extended: true }));
LoginRouter.use(express.json());

LoginRouter.route("/").post((req, res, next) => {
  console.log("55555555555555555555555");
  let email = req.body.email;
  let password = req.body.password;
  //let table = req.query.type == "client" ? "client" : "seller";
  let table = "client";
  console.log(req.body);
  const query = `select * from client where Email='${email}' and Password='${password}'`;

  pool
    .query(query)
    .then((result) => {
      if (result.rows.length == 0) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.json({
          msg: "wrong email",
        });
      } else {
        console.log(result.rows);
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
