import { CustomError } from "./custom";
import { messages } from "../utils";

export class NotFoundError extends CustomError {
  readonly status = 404;

  readonly name = "NotFoundError";

  /**
   *
   * @default not found
   */
  constructor(message: string = messages[404]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
