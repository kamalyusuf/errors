import { msgs } from "../utils";
import { CustomError } from "./Custom";

export class ForbiddenError extends CustomError {
  status = 403;

  constructor(public message: string = msgs[403]) {
    super(message);

    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
