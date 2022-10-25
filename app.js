/*------<APP>------*/
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

/*------<MIDDLEWARE>------*/
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

/*------<STATIC FILES>------*/
// app.use(express.static(path.join(__dirname, "/public")));

/*------<ROUTES>------*/
const indexRoute = require("./routes/IndexRoute");

/*------<ROUTES RUN>------*/
app.use("/", indexRoute);

/*------<MIDDLEWARE>------*/
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

/*------<404 ERROR | WEB>------*/
app.all("*", (req, res, next) => {
  const err = new Error(`Not found ${req.originalUrl} page | 404 ⛔`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});
/*------<EXPORT APP>------*/
module.exports = app;
