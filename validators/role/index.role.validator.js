const { z } = require('zod');
const { uuidV4Regex } = require('../../helpers/utils.helpers');

const roleIdvalidatorSchema = z.object({
    id: z.string().regex(uuidV4Regex, 'Invalid UUID v4 format'),
});

module.exports = roleIdvalidatorSchema;
