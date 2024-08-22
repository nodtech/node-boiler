const { z } = require('zod');

const updatePersonValidateSchema = z.object({
    status: z.string().min(1, 'status cannot be empty'),
});

module.exports = updatePersonValidateSchema;
