const { z } = require('zod');

const updateRoleValidateSchema = z.object({
    name: z.string().min(1),
});

module.exports = updateRoleValidateSchema;
