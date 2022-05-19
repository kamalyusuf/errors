import { CustomError } from "./Custom";
import { msgs } from "../utils";

export class NotFoundError extends CustomError {
  status = 404;

  constructor(message: string = msgs[404]) {
    super(message);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
