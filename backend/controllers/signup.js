const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    const { uname, fname, lname, email, password } = req.body;
    
    var encryptedPassword = await bcrypt.hash(password, 10);
    var oldUser = await User.findOne({email});
        if(oldUser){
           return res.json({error: "User exists"})
        }
   var newUser = new User({
        username: uname,
        first_name: fname,
        last_name: lname,
        profile_pic: "default-profile-pic",
        email: email,
        password: encryptedPassword
    });

    await newUser.save((err, User) => {
        if (err) res.send({ status: 'error' })
        res.send({ status: "ok" })
    })
}