const express = require("express");
const http = require("http");
let env = require("dotenv");
const cors = require("cors");
require("dotenv").config();
let { HomeRouter } = require("./Routes/HomeRouter");
let { LoginRouter } = require("./Routes/LoginRouter");
let { SignupRouter } = require("./Routes/SignUpRouter");
// let { SellerRouter } = require("./Routes/SellerRouter");
// let { ClientRouter } = require("./Routes/ClientRouter");
let { ItemRouter } = require("./Routes/ItemRouter");
// let { CartRouter } = require("./Routes/CartRouter");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

let server = http.createServer(app);
app.use(cors(corsOptions));

app.use("/test", (req, res, next) => {
  console.log("test");
  res.json({ path: "/test" });
});
app.use("/", HomeRouter);
app.use("/login", LoginRouter);
app.use("/signup", SignupRouter);
// app.use("/seller", SellerRouter);
// app.use("/client", ClientRouter);
app.use("/item", ItemRouter);
// app.use("/cart", CartRouter);

//server listen on port:ENV_PORT
server.listen((port = process.env.PORT), () => {
  console.log(`listening on port: ${port}`);
});
