import { messages } from "../utils";
import { CustomError } from "./custom";

export class InternalServerError extends CustomError {
  readonly status = 500;

  readonly name = "InternalServerError";

  /**
   *
   * @default internal server error
   */
  constructor(public message: string = messages[500]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
