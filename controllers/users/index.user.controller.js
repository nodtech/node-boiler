const { StatusCodes } = require('http-status-codes');
const { index: repoIndex } = require('../../repositories/user.repository');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const index = async function (req, res) {
  try {
    const users = await repoIndex();

    res.status(StatusCodes.OK).json(users); return;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
}

module.exports = index;
