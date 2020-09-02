const express = require("express");
const app = express();
const cors = require("cors");

// Middle ware
app.use(cors());

// Routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "You requested index page",
  });
});

// Catch 404 error and forward them to error handlers
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error hanlers
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // Response to client
  res.status(status).json({
    error: {
      message: error.message,
    },
  });
  // Response to ourself
  console.error(err);
});

// start the serevr
const port = app.get("port") || 4200;
app.listen(port, () => console.log("server started"));
