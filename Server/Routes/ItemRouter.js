let express = require("express");
let bodyparser = require("body-parser");
let ItemRouter = express.Router();
const Encrypter = require("../Utilities/Encryption");
require("dotenv").config();
const { Pool } = require("pg");

ItemRouter.use(bodyparser.urlencoded({ extended: true }));
ItemRouter.use(express.json());

ItemRouter.route("/")
  .get((req, res, next) => {
    const pool = new Pool({
      host: process.env.POSTGRESS_HOST,
      user: process.env.POSTGRESS_USER,
      port: process.env.POSTGRESS_PORT,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRESS_DATABASE,
    });
    let query = `select * from item`;
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
  })
  .post((req, res, next) => {
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let category = req.body.category;
    let seller_id = req.body.seller_id;

    const pool = new Pool({
      host: process.env.POSTGRESS_HOST,
      user: process.env.POSTGRESS_USER,
      port: process.env.POSTGRESS_PORT,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRESS_DATABASE,
    });

    let query = `insert into item (Name, Seller, Price, Description, Category) values ('${name}', '${seller_id}', ${price},'${description}','${category}')`;
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
