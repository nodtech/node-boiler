const jwt = require('jsonwebtoken');

const generateAccessToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });
};

const generateRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
};

const verifyToken = (token, type) => {
    return jwt.verify(token, type === 'refresh' ? process.env.JWT_REFRESH_SECRET : process.env.JWT_SECRET);
};

module.exports = {
    verifyToken,
    generateAccessToken,
    generateRefreshToken,
};