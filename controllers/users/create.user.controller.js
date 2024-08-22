const { StatusCodes } = require('http-status-codes');
const { create: serviceCreate } = require('../../services/user/create.user.service');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function (req, res) {
  try {
    const user = await serviceCreate(req.body);

    res.status(StatusCodes.CREATED).json(user.id); return;
  } catch (error) {
    res.status(error.code || StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
}

module.exports = create;
