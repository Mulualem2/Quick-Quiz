const User = require("../models/user.model");

exports.signup = async (req, res) => {
    const { uname, fname, lname, email, password } = req.body;

    var newUser = new User({
        username: uname,
        first_name: fname,
        last_name: lname,
        profile_pic: "default-profile-pic",
        email: email,
        password: password
    });

    await newUser.save((err, user) => {
        if (err) res.send({ status: 'error' })
        res.send({ status: "ok" })
    })


}