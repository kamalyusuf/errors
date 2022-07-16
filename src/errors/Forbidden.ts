import { msgs } from "../utils";
import { CustomError } from "./Custom";

export class ForbiddenError extends CustomError {
  status = 403;

  constructor(public message: string = msgs[403]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
