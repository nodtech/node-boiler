const { z } = require('zod');

const updateUserValidateSchema = z.object({
    name: z.string().min(1),
});

module.exports = updateUserValidateSchema;
