const bcrypt = require('bcrypt');
const { User } = require('../models');
const { v4: uuidv4 } = require('uuid');
const { sequelizeErrorParsor } = require('../helpers/utils.helpers');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const index = async function () {
    const users = await User.findAll({
        attributes: { exclude: ['password', 'deleted_at'] },
    }); return users;
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const findByEmail = async function (email) {
    const user = await User.findOne({ where: { email } }); return user;
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function ({ name, email }, transaction) {
    try {
        const passwordHash = await bcrypt.hash(email, 10);
        const user = await User.create({
            'id': uuidv4(),
            'name': name,
            'email': email,
            'password': passwordHash
        }, { transaction }); return user;
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
const view = async function (id, excludePassword = true) {
    discardedAttributes = excludePassword ? { exclude: ['password', 'deleted_at'] } : undefined;
    const user = await User.findOne({
        attributes: discardedAttributes,
        where: { id }
    }); return user;
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const update = async function (id, { name, email, phone }, transaction) {
    try {
        const [updatedRow] = await User.update({
            'name': name,
            'email': email,
            'phone': phone,
        }, {
            where: { id }
        }, {
            transaction
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
const remove = async function (id, transaction) {
    const removedRow = await User.destroy({ where: { id } }, { transaction }); return !(removedRow === 0);
}

module.exports = {
    view,
    index,
    create,
    remove,
    update,
    findByEmail,
}