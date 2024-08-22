const { StatusCodes } = require('http-status-codes');
const { refresh: serviceRefresh } = require('../../services/auth/refresh.auth.service');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const refresh = async function (req, res) {
    try {
        const { refresh_token: refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Access denied. No token provided.' });
        }

        const { accessToken } = await serviceRefresh(refreshToken);

        res.cookie('access_token', accessToken, {
            httpOnly: true,
            secure: process.env.COOKIE_SECURE === 'true',
        });

        res.status(StatusCodes.OK).json({ message: 'Access token refreshed successfully' }); return;
    } catch (error) {
        res.status(error.code || StatusCodes.BAD_REQUEST).json({ error: 'Invalid token' });
    }
}

module.exports = refresh
