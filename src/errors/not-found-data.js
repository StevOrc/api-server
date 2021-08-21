import CustomError from "./custom-error.js";

export default class NotFoundData extends CustomError {
  constructor(message) {
    super(message);
  }

  statusCode = 401;

  serializeError() {
    return [{ message: this.message, statusCode: this.statusCode }];
  }
}
