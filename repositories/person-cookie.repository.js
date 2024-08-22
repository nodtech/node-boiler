const { PersonCookie } = require('../models');
const { sequelizeErrorParsor } = require('../helpers/utils.helpers');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function (payload, transaction) {
    try {
        const person = await PersonCookie.create({
            'path': payload.path,
            'name': payload.name,
            'value': payload.value,
            'secure': payload.secure,
            'domain': payload.domain,
            'maxage': payload.maxage,
            'expires': payload.expires,
            'priority': payload.priority,
            'person_id': payload.personId,
            'httponly': payload.httponly,
            'samesite': payload.samesite,
            'sameparty': payload.sameparty,
            'raw_cookie': payload.rawCookie,
            'person_name': payload.personName,
            'person_email': payload.personEmail,
        }, {
            transaction,
        }); return person;
    } catch (error) {
        error = sequelizeErrorParsor(error) || error;
        throw error;
    }
}


module.exports = {
    create,
}