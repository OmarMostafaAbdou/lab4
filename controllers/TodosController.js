const todos = require("../models/Todo");
const { editUser } = require("./UserController");
const createTodos = async (_userid, _title, _tags, _status) => {
  try {
    let data = await todos.create({
      userid: _userid,
      title: _title,
      status: _status,
      tags: _tags,
    });
  } catch (e) {
    console.log(e);
  }
};
getTodosbyid = async (_userid) => {
  try {
    let data = await todos.find({ userid: _userid });
    return data;
  } catch (e) {
    console.log(e);
  }
};

edittodos = async (_todosid, _title) => {
  try {
    let data = await todos.updateOne({ _id: _todosid }, { title: _title });
  } catch (e) {
    console.log(e);
  }
};
deletetodos = async (_todosid) => {
  try {
    let data = await todos.deleteOne({ _id: _todosid });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createTodos, edittodos, getTodosbyid, deletetodos };
