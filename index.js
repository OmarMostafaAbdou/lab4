const mongoose = require("mongoose");
const express = require("express");
const app = express();
const userRoute = require("./Routes/UserRoute");
const todosRoute = require("./Routes/todosRoute");
const port = 4000;
mongoose
  .connect("mongodb://localhost:27017/todos")
  .then(() => {
    console.log("conection successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/todos", todosRoute);
app.listen(port, () => console.log("connection success"));
