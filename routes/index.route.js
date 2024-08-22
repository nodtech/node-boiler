const express = require('express');
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
const roleRoutes = require('./role.route');
const personRoutes = require('./person.route');
const clientRoutes = require('./client-route.route');
const authenticate = require('../middlewares/auth.middleware');
const { authenticate: clientAuthenticate } = require('../middlewares/client-auth.middleware');

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/roles', authenticate, roleRoutes);

router.use('/users', authenticate, userRoutes);

router.use('/persons', authenticate, personRoutes);

router.use('/client', clientAuthenticate, clientRoutes);

module.exports = router;