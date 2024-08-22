const { z } = require('zod');

const indexClientPersonValidateSchema = z.object({
    urn: z.string().min(1, 'urn cannot be empty'),
});

module.exports = indexClientPersonValidateSchema;
