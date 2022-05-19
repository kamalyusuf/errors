import { msgs } from "../utils";
import { CustomError } from "./Custom";

export class InternalServerError extends CustomError {
  status = 500;

  constructor(public message: string = msgs[500]) {
    super(message);

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
