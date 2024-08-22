const { StatusCodes } = require('http-status-codes');
const { view: repoView } = require('../../repositories/user.repository');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const view = async function (req, res) {
  try {
    const { id } = req.params;

    const user = await repoView(id);

    res.status(StatusCodes.OK).json(user); return;
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
}

module.exports = view;
