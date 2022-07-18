import { msgs } from "../utils";
import { CustomError } from "./Custom";

export class InternalServerError extends CustomError {
  status = 500;

  readonly name = "InternalServerError";

  /**
   *
   * @default internal server error
   */
  constructor(public message: string = msgs[500]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
