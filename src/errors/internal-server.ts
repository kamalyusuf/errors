import { messages } from "../utils.js";
import { CustomError } from "./custom.js";

export class InternalServerError extends CustomError {
  readonly status = 500;

  readonly name = "InternalServerError";

  constructor(public override message: string = messages[500]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
