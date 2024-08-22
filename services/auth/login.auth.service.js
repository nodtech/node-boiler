const bcrypt = require('bcryptjs');
const { findByEmail } = require('../../repositories/user.repository');
const { generateAccessToken, generateRefreshToken } = require('../../helpers/auth.helpers');

const login = async function (payload) {
    const { email, password } = payload;

    const user = await findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        const error = new Error('Invalid email or password');
        error.code = 401; throw error;
    }

    const accessToken = generateAccessToken(user.id);

    const refreshToken = generateRefreshToken(user.id);

    return { accessToken, refreshToken };
};

module.exports = { login };