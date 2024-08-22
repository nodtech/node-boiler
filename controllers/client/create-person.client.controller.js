const { StatusCodes } = require('http-status-codes');
const { create: repoCreate } = require('../../services/client/create-person.client.service');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function (req, res) {
  try {
    const personUrn = await repoCreate(req.body);

    res.status(StatusCodes.CREATED).send({ urn: personUrn });
    
    return;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message, errors: error.errors || undefined });
  }
}

module.exports = { create };
