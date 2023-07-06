let express = require("express");
let bodyparser = require("body-parser");
let ProductRouter = express.Router();
const Encrypter = require("../Utilities/Encryption");
require("dotenv").config();
const { pool } = require("../config");

ProductRouter.use(bodyparser.urlencoded({ extended: true }));
ProductRouter.use(express.json());

ProductRouter.route("/")
  .get((req, res, next) => {
    let query = req.query.name
      ? `select * from product where Name Like '${req.query.name}%'`
      : `select * from product`;
    pool
      .query(query)
      .then(
        (result) => {
          console.log(result.rows);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          result != undefined
            ? res.json(result.rows)
            : res.json([{ message: "no products found" }]);
        },
        (err) => {
          console.log(err);
          res.json({
            message: "a7a",
          });
        }
      )
      .catch((err) => {
        console.log(err);
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.json({
          message: err.message,
        });
      });
  })
  .post((req, res, next) => {
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let category = req.body.category;
    let seller_id = req.body.seller_id;

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

//______________________________________________________________________

ProductRouter.route("/:id").get((req, res, next) => {
  let query = `select * from product where ProductID=${req.params.id}`;
  pool
    .query(query)
    .then(
      (result) => {
        console.log(result.rows);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(result.rows[0]);
      },
      (err) => {
        console.log(err);
        res.json({
          message: "a7a",
        });
      }
    )
    .catch((err) => {
      console.log(err);
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.json({
        message: err.message,
      });
    });
});

module.exports = { ProductRouter };
