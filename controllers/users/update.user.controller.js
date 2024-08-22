const { StatusCodes } = require('http-status-codes');
const { update: repoUpdate } = require('../../repositories/user.repository');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const update = async function (req, res) {
  try {
    const { id } = req.params;

    const isUpdated = await repoUpdate(id, req.body);

    if (!isUpdated) {
      return res.status(StatusCodes.NOT_FOUND).send();
    }

    res.status(StatusCodes.ACCEPTED).send();
    
    return;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
}

module.exports = update;
