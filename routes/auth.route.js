const express = require('express');
const authenticate = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validator.middleware');
const login = require('../controllers/auth/login.auth.controller');
const logout = require('../controllers/auth/logout.auth.controller');
const refresh = require('../controllers/auth/refresh.auth.controller');
const loginValidateSchema = require('../validators/auth/login.auth.validator');

const router = express.Router();

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                       message:
 *                         type: string
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post('/login', validate(loginValidateSchema), login);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   delete:
 *     summary: Logout a user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.delete('/logout', authenticate, logout);

router.post('/refresh', refresh);

module.exports = router;
