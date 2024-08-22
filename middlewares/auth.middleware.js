const { StatusCodes } = require('http-status-codes');
const { verifyToken } = require('../helpers/auth.helpers');

const authenticate = (req, res, next) => {
    const { access_token: accessToken } = req.cookies;

    if (!accessToken) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decodedId = verifyToken(accessToken, 'access');
        req.userId = decodedId; next();
    } catch (error) {
        console.log('error', error)
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid token.' });
    }
};

module.exports = authenticate;