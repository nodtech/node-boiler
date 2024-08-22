const { z } = require('zod');

const loginValidateSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string(),
});

module.exports = loginValidateSchema;
