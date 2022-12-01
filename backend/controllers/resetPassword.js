const User = require('../models/user.model')
const jwt = require("jsonwebtoken");

const JWT_sec = "asfnjkdshf24879834583;'.f093498567*^67343@##@skdfjidsfaishcuhfksnksjfheygfusgfgfeufdsjf1654";

exports.resetPassword = async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!" });
  }
  const secret = JWT_sec + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("reset", { email: verify.email, status: "Not Verified!" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
}