import expressValidator from "express-validator";
import RequestValidationError from "../errors/request-validation-error.js";

export default (req, res, next) => {
  const errors = expressValidator.validationResult(req);
  if (!errors.isEmpty())
    throw new RequestValidationError(errors.array({ onlyFirstError: true }));

  next();
};
