let express = require("express");
let HomeRouter = express.Router();
const { pool } = require("../config");

HomeRouter.route("/").get((req, res, next) => {
  let quey = `select * from item`;
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

module.exports = { HomeRouter };
