import { CustomError } from "./Custom";
import { msgs } from "../utils";

export class NotFoundError extends CustomError {
  status = 404;

  readonly name = "NotFoundError";

  /**
   *
   * @default not found
   */
  constructor(message: string = msgs[404]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
