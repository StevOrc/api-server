import CustomError from "./custom-error.js";

class RouteNotFoundError extends CustomError {
  constructor(message) {
    super(message);
  }

  statusCode = 401;

  serializeError() {
    return [{ messsage: this.message, statusCode: this.statusCode }];
  }
}

export default RouteNotFoundError;
