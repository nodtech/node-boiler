const { ValidationError } = require('sequelize');

const parseCookie = (cookieString) => {
    const cookieAttributes = {};

    // Split the cookie string by ';' to separate the attributes
    const parts = cookieString.split(';');

    parts.forEach(part => {
        const [key, value] = part.split('=').map(str => str.trim());

        // Add the key-value pair to the attributes object
        if (key) cookieAttributes[key.toLowerCase().replace('-', '')] = value || true;
    });

    return cookieAttributes;
};

const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const sequelizeErrorParsor = (error) => {
    if (error instanceof ValidationError) {
        const returnError = new Error('validation error');
        // Handle Sequelize validation error
        returnError.errors = error.errors.map(err => ({
            field: err.path,
            message: err.message
        }));
        return returnError;
    }
    return false
}

module.exports = {
    parseCookie,
    uuidV4Regex,
    sequelizeErrorParsor,
}
