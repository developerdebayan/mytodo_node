const jwt = require('jsonwebtoken');

exports.refreshToken = (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = jwt.decode(token, "secret");

    const newToken = jwt.sign({
        id: decoded['id'],
    }, "secret", { expiresIn: "1h" });

    res.status(200).json({ statusCode: 200, status: 1, message: newToken });
};
