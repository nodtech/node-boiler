const { UserRole } = require('../models');
const { sequelizeErrorParsor } = require('../helpers/utils.helpers');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function ({ userId, roleId }, transaction) {
    try {
        const userRole = await UserRole.create({
            'user_id': userId,
            'role_id': roleId,
        }, { transaction });

        return userRole;
    } catch (error) {
        error = sequelizeErrorParsor(error) || error;
        throw error;
    }

}

module.exports = {
    create,
}