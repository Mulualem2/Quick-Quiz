require('dotenv').config()
const User = require('../models/user.model')
const jwt = require("jsonwebtoken");
const JWT_sec = "asfnjkdshf24879834583;'.f093498567*^67343@##@skdfjidsfaishcuhfksnksjfheygfusgfgfeufdsjf1654";
var nodemailer = require("nodemailer");
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_sec + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:4000/resetPassword/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: "gmail",
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
        secure: true
      });
  
      var mailOptions = {
        from: "QuickQuiz1@gmail.com",
        to: oldUser.email,
        subject: "Password Reset",
        text: link,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log(link);
    } catch (error) {
        
    }
}