const { Person } = require('../models');
const { sequelizeErrorParsor } = require('../helpers/utils.helpers');

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const index = async function () {
    const persons = await Person.findAll(); return persons;
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const view = async function (id) {
    const user = await Person.findOne({ where: { id } }); return user;
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const findByUrn = async function (urn) {
    const user = await Person.findOne({ where: { urn } }); return user;
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const update = async function (id, { status }, transaction) {
    try {
        const [updatedRow] = await Person.update({
            'status': status
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
    const removedRow = await Person.destroy({
        where: { id }
    }, {
        transaction
    }); return removedRow < 1;
}

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
const create = async function ({ name, email, urn }, transaction) {
    try {
        const person = await Person.create({
            'urn': urn,
            'name': name,
            'email': email,
            'status': 'active'
        }, {
            transaction,
        }); return person;
    } catch (error) {
        error = sequelizeErrorParsor(error) || error;
        throw error;
    }

}


module.exports = {
    view,
    index,
    remove,
    create,
    update,
    findByUrn,
}