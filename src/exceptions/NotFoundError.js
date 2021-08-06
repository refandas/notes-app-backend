const ClientError = require('./ClientError');

class NotFountError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFountError;
