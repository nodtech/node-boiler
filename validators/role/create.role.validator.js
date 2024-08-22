const { z } = require('zod');

const createRoleValidateSchema = z.object({
  name: z.string().min(1),
});

module.exports = createRoleValidateSchema;
