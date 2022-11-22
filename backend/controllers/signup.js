const User = require("../models/user.model");

exports.signup = async(req, res) => {
    const {username, first_name, last_name,  email, password} = req.body;
    try{
        await User.create({
            username,
            first_name,
            last_name,
            email,
            password
        });
        res.send({status:"ok"})
    }
    catch(error){
        res.send({status:"error"})
    }

}