const { StatusCodes } = require('http-status-codes');
const { remove: repoRemove } = require('../../repositories/role.repository');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const remove = async function (req, res) {
  try {
    const { id } = req.params;

    const isRemoved = await repoRemove(id);

    if (!isRemoved) {
      return res.status(StatusCodes.NOT_FOUND).send();
    }

    res.status(StatusCodes.OK).send();

    return;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
}

module.exports = remove;
