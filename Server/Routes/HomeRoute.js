let express = require("express");
let HomeRouter = express.Router();

HomeRouter.route("/").get((req, res, next) => {
  res.json({ path: "/home get" });
});

module.exports = HomeRouter;
