let express = require("express");
let http = require("http");
const { env } = require("process");
require("dotenv").config();
let HomeRouter = require("./Routes/HomeRoute");

let app = express();
let server = http.createServer(app);

app.use("/test", (req, res, next) => {
  console.log("test");
  res.json({ path: "/test" });
});
app.use("/", HomeRouter);

//server listen on port:ENV_PORT
server.listen((port = process.env.PORT), () => {
  console.log(`listening on port: ${port}`);
});
