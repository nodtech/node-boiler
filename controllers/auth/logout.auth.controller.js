const { StatusCodes } = require('http-status-codes');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const logout = async function (req, res) {
  try {
    res.clearCookie('access_token');
    
    res.clearCookie('refresh_token');

    res.status(StatusCodes.OK).send(); return;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
}

module.exports = logout
