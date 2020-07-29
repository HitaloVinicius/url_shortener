const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_TOKEN;

const isUserAuthenticated = function (req, res, next) {

    const token = req.headers.auth || req.cookies.auth;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    };

    jwt.verify(token, secret, function (error, decoded) {
        if (error) {
            return res.status(401).send({ message: 'Unauthorized: Invalid token' });
        } else {
            req.user = decoded;
            next();
        };
    });

};

module.exports = isUserAuthenticated;
