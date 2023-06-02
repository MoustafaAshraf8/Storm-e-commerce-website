let express = require("express");
let bodyparser = require("body-parser");
const { pool } = require("../config");
const CartRouter = express.Router();

CartRouter.use(bodyparser.urlencoded({ extended: true }));
CartRouter.use(express.json());

CartRouter.route("/:clientid").get((req, res, next) => {
  const clientid = req.params.clientid;
  const query = `select product.Name, product.Category, product.Rating, product.Price from cart,product where cart.ClientID = ${clientid} and cart.ItemID = product.ProductID`;
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

module.exports = { CartRouter };
