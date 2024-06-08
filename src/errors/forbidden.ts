import { messages } from "../utils.js";
import { CustomError } from "./custom.js";

export class ForbiddenError extends CustomError {
  readonly status = 403;

  readonly name = "ForbiddenError";

  constructor(public override message: string = messages[403]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
