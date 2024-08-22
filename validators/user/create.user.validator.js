const { z } = require('zod');

const createUserValidateSchema = z.object({
  name: z.string().min(1),
});

module.exports = createUserValidateSchema;
