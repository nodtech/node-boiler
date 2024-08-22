const { verifyToken } = require('../../helpers/auth.helpers');

const refresh = async function (token) {
    const id = verifyToken(token);

    return generateAccessToken(id);
};

module.exports = { refresh };