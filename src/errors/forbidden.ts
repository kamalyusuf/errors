import { messages } from "../utils";
import { CustomError } from "./custom";

export class ForbiddenError extends CustomError {
  readonly status = 403;

  readonly name = "ForbiddenError";

  constructor(public message: string = messages[403]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
