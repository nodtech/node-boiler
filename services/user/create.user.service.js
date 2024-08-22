const { sequelize } = require('../../models');
const { create: userRepoCreate } = require('../../repositories/user.repository');
const { findByIds: roleRepoFindByIds } = require('../../repositories/role.repository');
const { create: userRoleRepoCreate } = require('../../repositories/user-role.repository');

/**
 * Description
 * @param {any} payload
 * @returns {any}
 */
const create = async function (payload) {
    const { email, name, role_ids: roleIds } = payload;
    const transactionContext = await sequelize.transaction();
    try {

        const user = await userRepoCreate({
            name: name,
            email: email
        }, transactionContext);

        const roles = await roleRepoFindByIds(roleIds);

        if (!roles.length) {
            const error = new Error("Roles don't exists");
            error.code = 404; throw error;
        }

        for (let i = 0; i < roles.length; i++) {
            const role = roles[i];
            await userRoleRepoCreate({ userId: user.id, roleId: role.id }, transactionContext);
        }

        await transactionContext.commit();

        return user.id;
    } catch (error) {
        await transactionContext.rollback(); throw error;
    }
};

module.exports = { create };