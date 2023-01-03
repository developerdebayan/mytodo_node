const jwt = require('jsonwebtoken');
const UserModel = require('../model/User');
const { ObjectId } = require('mongodb');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, "secret");
        let id = decoded['id'];
        let existingUser = await UserModel.findOne({ _id: ObjectId(id) });

        if (existingUser != null) {
            req.userId = existingUser.id;
            next();
        } else {
            return res.status(403).json({
                message: "user not found"
            });
        }
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({
                statusCode: 401,
                message: err.message
            })
        } else {
            return res.status(403).json({
                statusCode: 403,
                message: err.message
            })
        }

    }
};