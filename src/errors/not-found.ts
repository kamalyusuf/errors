import { CustomError } from "./custom.js";
import { messages } from "../utils.js";

export class NotFoundError extends CustomError {
  readonly status = 404;

  readonly name = "NotFoundError";

  constructor(message: string = messages[404]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
