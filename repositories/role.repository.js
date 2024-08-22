const { Role } = require('../models');
const { sequelizeErrorParsor } = require('../helpers/utils.helpers');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const index = async function () {
    const roles = await Role.findAll({
        attributes: { exclude: ['deleted_at'] },
    }); return roles;
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function ({ name }, trnxContext) {
    try {
        const role = await Role.create({
            'name': name,
        }, {
            trnxContext,
        }); return role;
    } catch (error) {
        error = sequelizeErrorParsor(error) || error;
        throw error;
    }

}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const update = async function (id, { name }, trnxContext) {
    try {
        const [updatedRow] = await Role.update({
            'name': name
        }, {
            where: { id }
        }, {
            trnxContext
        }); return !(updatedRow === 0);
    } catch (error) {
        error = sequelizeErrorParsor(error) || error;
        throw error;
    }
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const remove = async function (id, trnxContext) {
    const removedRow = await Role.destroy({ where: { id } }, { trnxContext }); return !(removedRow === 0);
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const findByIds = async function (ids) {
    const roles = await Role.findAll({ where: { id: ids } }); return roles;
}

module.exports = {
    index,
    create,
    remove,
    update,
    findByIds,
}