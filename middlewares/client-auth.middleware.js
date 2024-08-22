const { StatusCodes } = require('http-status-codes');

const authenticate = (req, res, next) => {
    const xClientKey = req.headers['x-client-key'];

    if (!xClientKey) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Access denied. No key provided.' });
    }

    if (xClientKey !== process.env.X_CLIENT_KEY) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Access denied. Invalid key.' });
    }

    next();
};

module.exports = { authenticate };