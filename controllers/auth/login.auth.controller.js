const { StatusCodes } = require('http-status-codes');
const { login: serviceLogin } = require('../../services/auth/login.auth.service');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const login = async function (req, res) {
  try {
    const { accessToken, refreshToken } = await serviceLogin(req.body);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === 'true',
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === 'true',
    });

    res.status(StatusCodes.OK).json({ message: 'User logged in successfully' }); return;
  } catch (error) {
    res.status(error.code || StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
}

module.exports = login
