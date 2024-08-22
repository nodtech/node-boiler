const { StatusCodes } = require('http-status-codes');
const { create: repoCreate } = require('../../services/client/create-person-cookie.client.service');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function (req, res) {
  try {
    const { urn } = req.params;

    const personUrn = await repoCreate(urn, req.body);

    res.status(StatusCodes.CREATED).send({ urn: personUrn });
    
    return;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
}

module.exports = { create };
