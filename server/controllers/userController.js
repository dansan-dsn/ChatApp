const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_KEY;
  return jwt.sign({ _id }, jwtkey, { expiration: "3d" });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (user)
    return res.status(400).json("User with a given email already exists");

  if (!name || !email || !password)
    return res.status(400).json("All fields are required");

  if (!validator.isEmail(email))
    return res.status(400).json("Email must be a valid email");

  if (!validator.isStrongPassword(password))
    return res.status(400).json("Password must be a strong password");

  user = new userModel({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.save();
};

module.exports = { registerUser };
