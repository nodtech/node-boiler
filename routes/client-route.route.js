const express = require('express');
const validator = require('../middlewares/validator.middleware');
const indexClientPersonvalidatorSchema = require('../validators/client/index.client.validator');
const createPersonvalidatorSchema = require('../validators/client/create-person.client.validator');
const createPersonCookievalidatorSchema = require('../validators/client/create-person-cookie.client.validator');
const { create: clientCreatePerson } = require('../controllers/client/create-person.client.controller');
const { create: clientCreatePersonCookie } = require('../controllers/client/create-person-cookie.client.controller');

const router = express.Router();

/**
 * @swagger
 * /api/v1/client/persons:
 *   post:
 *     summary: Create a new person for a client
 *     tags: [Client]
 *     parameters:
 *       - in: header
 *         name: x-client-key
 *         required: true
 *         description: Unique access key which will be shared with client to access the APIs
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               urn:
 *                 type: string
 *                 example: 1234XYNB
 *                 required: true
 *                 description: Unique identifier reference number/code
 *               name:
 *                 type: string
 *                 example: Test Person
 *               email:
 *                 type: string
 *                 example: person@example.com
 *     responses:
 *       201:
 *         description: Client person created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 urn:
 *                   type: string
 *                   example: 1234XYNB                 
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'validation error'
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                         example: 'urn'
 *                       message:
 *                         type: string
 *                         example: 'urn must be unique'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Access denied. Invalid key.'
 */
router.post('/persons', validator(createPersonvalidatorSchema), clientCreatePerson);

/**
 * @swagger
 * /api/v1/client/persons/{urn}/cookies:
 *   post:
 *     summary: Create a cookie for a client's person
 *     tags: [Client]
 *     parameters:
 *       - in: header
 *         name: x-client-key
 *         required: true
 *         description: Unique access key which will be shared with client to access the APIs
 *         schema:
 *           type: string
 *       - in: path
 *         name: urn
 *         required: true
 *         description: Unique identifier reference number/code
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               raw_cookie:
 *                 type: string
 *                 required: true
 *                 example: 'sessionId=abc123; Expires=Wed, 24-Jul-2024 15:30:00 GMT; Max-Age=3600; Domain=example.com; Path=/; Secure; HttpOnly; SameSite=Strict'
 *               name:
 *                 type: string
 *                 example: Person site name
 *               email:
 *                 type: string
 *                 example: personsiteemail@site.com
 *     responses:
 *       201:
 *         description: Client person's cookie created, It will return same urn of person
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 urn:
 *                   type: string
 *                   example: 1234XYNB
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'validation error'
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                         example: 'urn'
 *                       message:
 *                         type: string
 *                         example: 'urn must be unique'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Access denied. Invalid key.'
 */
router.post('/persons/:urn/cookies', validator(indexClientPersonvalidatorSchema, true), validator(createPersonCookievalidatorSchema), clientCreatePersonCookie);

module.exports = router;
