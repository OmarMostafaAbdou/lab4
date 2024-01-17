const mongoose = require("mongoose");
Todoschema = mongoose.Schema({
  userid: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20,
  },
  status: {
    type: String,
    default: "to-do",
  },
  tags: {
    type: Array,
    maxLength: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const todos = mongoose.model("todos", Todoschema);
todos.createIndexes({ title: 1 });
module.exports = todos;
