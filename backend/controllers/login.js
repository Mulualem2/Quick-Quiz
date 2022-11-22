const User = require('../models/user.model')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_sec = "asfnjkdshf24879834583;'.f093498567*^67343@##@skdfjidsfaishcuhfksnksjfheygfusgfgfeufdsjf1654";
exports.login = async (req, res) => {
    const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_sec);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
}
