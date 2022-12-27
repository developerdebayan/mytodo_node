const jwt = require('jsonwebtoken');

const User = require("../model/User");

// exports.getAllUsers = async (req,res,next) => {
//     let users;
//     try{
//         users = await User.find();
//     }catch(err){
//         return next(err);
//     }

//     if(!users){
//         return res.status(500).json({
//             message: "Internal Server Error"
//         });
//     }

//     return res.status(200).json({users});
// };

exports.register = async (req,res,next) => {
    const {name,email,password} = req.body;
    try{
        let user = new User({
            name,
            email,
            password
        });
        user = await user.save();
        const token = jwt.sign({id: user.id,}, "secret", { expiresIn: "1h" });
        return res.status(201).json({
            status : 201,
            message: "Registration Successful",
            user : {
                id : user.id,
                name : user.name,
                email : user.email,
                token : token
            }
        });
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
