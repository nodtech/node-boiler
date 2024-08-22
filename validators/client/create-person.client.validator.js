const { z } = require('zod');

const createClientPersonValidateSchema = z.object({
    urn: z.string().min(1, 'urn cannot be empty'),
    name: z.string('name should be string').min(1, 'name cannot be empty').optional(),
    email: z.string().min(1, 'email cannot be empty').email('Invalid email format').optional(),
});

module.exports = createClientPersonValidateSchema;
