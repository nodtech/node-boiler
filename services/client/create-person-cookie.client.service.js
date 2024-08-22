const { sequelize } = require('../../models');
const { parseCookie } = require('../../helpers/utils.helpers');
const { findByUrn: personRepofindByUrn } = require('../../repositories/person.repository');
const { create: personCookieRepoCreate } = require('../../repositories/person-cookie.repository');

/**
 * Description
 * @param {any} payload
 * @returns {any}
 */
const create = async function (urn, payload) {
    const transactionContext = await sequelize.transaction();
    try {
        const person = await personRepofindByUrn(urn);

        if (!person) {
            const error = new Error('Person not found');
            error.code = 404; throw error;
        }

        const { raw_cookie: rawCookie, name, email } = payload;

        const cookieAttributes = parseCookie(rawCookie);

        await personCookieRepoCreate({
            ...cookieAttributes,
            personId: person.id,
            personName: name,
            personEmail: email,
            rawCookie
        }, transactionContext);

        await transactionContext.commit();

        return person.urn;
    } catch (error) {
        await transactionContext.rollback(); throw error;
    }
};

module.exports = { create };