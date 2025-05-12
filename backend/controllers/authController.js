const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
// haash bibliothéque
const bcrypt = require(`bcryptjs`);
// outil de générationdu token
const jwt = require(`jsonwebtoken`);
// l importation du l exemple de généation du token
const tokenkey = process.env.TOKEN_KEY;
// génération du token
const generateToken = (id) => {
  return jwt.sign({ id }, tokenkey, { expiresIn: "1d" }); // available 1 day
};
const register = asyncHandler(async (req, res) => {
  // asyn: asynchrone fn :action retardé
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json({ message: "User already exist" });
    return;
  }
  // salt: l element de cryptage
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(200).json({ user, token: generateToken(user._id) });
});
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res
      .status(200)
      .json({ user, message: "success", token: generateToken(user._id) });
  } else {
    res.status(200).json({ message: "invalid email or password" });
  }
});
module.exports = {
  register,
  login,
};
