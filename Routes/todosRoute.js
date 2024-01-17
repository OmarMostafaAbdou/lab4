const TodosController = require("../controllers/TodosController");
const express = require("express");
const route = express.Router();

route.post("/add-todo", async (req, res) => {
  try {
    let { userid, title, tags } = req.body;
    let data = await TodosController.createTodos(userid, title, tags);
    if (data != 0) {
      res.send(data);
    } else {
      res.send("enter todos");
    }
  } catch (e) {
    console.log(e);
  }
});
route.get("/get-by-id", async (req, res) => {
  try {
    let { userid } = req.body;
    let data = await TodosController.getTodosbyid(userid);
    if (data != "error") {
      res.send(data);
    } else {
      res.send("error");
    }
  } catch (e) {
    res.send("try again");
  }
});
route.patch("/update/:todoid", async (req, res) => {
  let data = await TodosController.edittodos(req.params.todoid, req.body.title);
  res.send("update successfully");
});

route.delete("/delete/:todoid", async (req, res) => {
  let data = await TodosController.deletetodos(req.params.todoid);
  res.send("deleted successfully");
});

module.exports = route;
