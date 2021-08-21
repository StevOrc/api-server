import CustomError from "../errors/custom-error.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError)
    return res.status(err.statusCode).send(err.serializeError());
  if (err instanceof Error)
    return res.status(400).send({ message: err.message });

  next();
};

export default errorHandler;
