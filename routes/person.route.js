const express = require('express');
const validate = require('../middlewares/validator.middleware');
const view = require('../controllers/persons/view.person.controller');
const index = require('../controllers/persons/index.person.controller');
const remove = require('../controllers/persons/remove.person.controller');
const update = require('../controllers/persons/update.person.controller');
const indexPersonvalidatorSchema = require('../validators/person/index.person.validator');
const updatePersonvalidatorSchema = require('../validators/person/update.person.validator');

const router = express.Router();

/**
 * @swagger
 * /api/v1/persons:
 *   get:
 *     summary: Get a list of persons
 *     tags: [Persons]
 *     responses:
 *       200:
 *         description: List of persons
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
router.get('', index);

/**
 * @swagger
 * /api/v1/persons/{id}:
 *   get:
 *     summary: Get a person by ID
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Person data
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
router.get('/:id', validate(indexPersonvalidatorSchema, true), view);

router.put('/:id', validate(indexPersonvalidatorSchema, true), validate(updatePersonvalidatorSchema), update);

router.delete('/:id', validate(indexPersonvalidatorSchema, true), remove);

module.exports = router;
