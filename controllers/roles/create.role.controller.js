const { StatusCodes } = require('http-status-codes');
const { create: repoCreate } = require('../../repositories/role.repository');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function (req, res) {
  try {
    const role = await repoCreate(req.body);

    res.status(StatusCodes.CREATED).send({ id: role.id });
    
    return;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
}

module.exports = create;
