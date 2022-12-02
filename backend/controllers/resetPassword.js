require('dotenv').config()
const User = require('../models/user.model')
const jwt = require("jsonwebtoken");


exports.resetPassword = async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!" });
  }
  const secret = process.env.JWT_sec + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("reset", { email: verify.email, status: "Not Verified!" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
}