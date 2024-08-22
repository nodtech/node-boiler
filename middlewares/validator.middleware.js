const { ZodError } = require('zod');

function validate(schema, params = false) {
  return (req, res, next) => {
    try {
      schema.parse(params ? req.params : req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          errors: err.errors,
        });
      }
      next(err);
    }
  };
}

module.exports = validate;
