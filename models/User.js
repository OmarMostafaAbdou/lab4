const mongoose = require("mongoose");
userschema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fristName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  age: {
    type: Number,
    minLength: 13,
  },
});
const User = mongoose.model("User", userschema);
module.exports = User;
