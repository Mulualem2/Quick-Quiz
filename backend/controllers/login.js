require('dotenv').config()
const User = require('../models/user.model')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const { email, password } = req.body;

  const user = await User.findOne({ email });
  
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, process.env.JWT_sec);
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(new Date().getTime() + 100 * 1000),
      Path: '/',
      SameSite: 'strict',
    });
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
}
