const { sequelize } = require('../../models');
const { create: personRepoCreate } = require('../../repositories/person.repository');

/**
 * Description
 * @param {any} payload
 * @returns {any}
 */
const create = async function (payload) {
    const transactionContext = await sequelize.transaction();
    try {

        const person = await personRepoCreate(payload, transactionContext);

        await transactionContext.commit();

        return person.urn;
    } catch (error) {
        await transactionContext.rollback(); throw error;
    }
};

module.exports = { create };