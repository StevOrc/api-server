import CustomError from "./custom-error.js";

class RequestValidationError extends CustomError {
  constructor(errors) {
    super("Error request validation");
    this.errors = errors;
  }

  statusCode = 400;

  serializeError() {
    console.log("AAAAAAAAAAAAAAAA", this.errors);
    return this.errors.map(function (err) {
      return {
        field: err.param,
        message: err.msg,
      };
    });
  }
}

export default RequestValidationError;
