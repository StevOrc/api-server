import CustomError from "./custom-error.js";

class BadObjectId extends CustomError {
  constructor(message) {
    super(message);
  }

  statusCode = 401;

  serializeError() {
    return [{ message: this.message, statusCode: this.statusCode }];
  }
}

export default BadObjectId;
