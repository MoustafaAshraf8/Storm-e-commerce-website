let express = require("express");
const bcrypt = require("bcrypt");
let bodyparser = require("body-parser");
let SignupRouter = express.Router();
const Encrypter = require("../Utilities/Encryption");
const { pool } = require("../config");

SignupRouter.use(bodyparser.urlencoded({ extended: true }));
SignupRouter.use(express.json());

SignupRouter.route("/").post((req, res, next) => {
  //   let name = req.body.name;
  //   let email = req.body.email;
  //   let password = req.body.password;
  //   let phone = req.body.phone;
  //   let address = req.body.address;

  let { name, email, password, phone } = req.body;
  let address = "test";
  //   password = Encrypter.encrypt(password);

  console.log(req.body.password);
  let query = `insert into client (Name, Email, Password, Phone, Address) values ('${name}', '${email}', '${password}', '${phone}', 'test')`;
  pool
    .query(query)
    .then(
      (result) => {
        console.log(result.rows);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(result.rows);
      },
      (err) => {
        console.log(err);
        res.json(err);
      }
    )
    .catch((err) => {
      console.log(err);
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.json(err);
    });
});

module.exports = { SignupRouter };
