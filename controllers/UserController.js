const { log } = require("console");
const User = require("../models/User");
const Register = async (_Username, _Password, _Fristname) => {
  try {
    let data = await User.create({
      username: _Username,
      password: _Password,
      fristName: _Fristname,
    });
    if (data) {
      console.log("user was registered successfully");
    } else {
      console.log("try again");
    }
  } catch (e) {
    console.log(e);
  }
};

const Login = async (_Username, _Password) => {
  try {
    let data = await User.findOne({ username: _Username });
    console.log("ss", data);
    if (data) {
      console.log("logged in successfully");
      return data;
    } else {
      console.log("invalid credentials");
    }
  } catch (e) {
    console.log(e);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find({}, { fristName: 1 });
    console.log(users);
    return users;
  } catch (e) {
    console.log(e);
  }
};

const deleteUser = async (_Username) => {
  let data = await User.deleteOne({ username: _Username });
};
const editUser = async (_Username, _Fristname) => {
  try {
    let data = await User.updateOne(
      { username: _Username },
      { fristName: _Fristname }
    );
    if (data) {
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { Register, Login, getAllUsers, editUser, deleteUser };
