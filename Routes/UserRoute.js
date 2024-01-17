const UserController = require("../controllers/UserController");
const express = require("express");
const route = express.Router();
let bcrypt = require("bcrypt");

route.post("/register", async (req, res) => {
  try {
    let { username, password, fristName } = req.body;
    bcrypt.hash(password, 7, async (err, hash) => {
      let data = await UserController.Register(username, hash, fristName);
      if (data != 0) {
        res.send(data);
      } else {
        res.send("reg again");
      }
    });
  } catch {
    res.status(500).send("reg error");
  }

  res.send("ok");
});

route.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    const login = await UserController.Login(username);
    console.log(login);
    bcrypt.compare(password, login.password, function (err, result) {
      console.log(result);
      if (result) {
        res.send(result);
      } else {
        res.send("err");
      }
    });
  } catch (e) {
    console.log(e);
  }
});

route.get("/get-all-users", async (req, res) => {
  try {
    let data = await UserController.getAllUsers();
    let users;

    if (data != 0) {
      users = res.json({
        users: data,
        status: 200,
      });
    } else {
      res.status(403).send("not found");
    }
  } catch (e) {
    res.status(500).send("server error");
  }
});

route.delete("/delete", async (req, res) => {
  let { username } = req.body;
  try {
    let data = await UserController.deleteUser(username);

    res.send("user deleted");
  } catch (e) {
    console.log(e);
  }
});

route.patch("/update", async (req, res) => {
  let { username, fristName } = req.body;
  try {
    let data = await UserController.editUser(username, fristName);

    res.send("user updated");
  } catch (e) {
    console.log(e);
  }
});

module.exports = route;
