const User = require('../models/user.model')
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const JWT_sec = "asfnjkdshf24879834583;'.f093498567*^67343@##@skdfjidsfaishcuhfksnksjfheygfusgfgfeufdsjf1654";

exports.rePassword = async (req, res) => {
    const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists" });
  }
  const secret = JWT_sec + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    

    res.render("reset", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
}