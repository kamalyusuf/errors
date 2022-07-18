import { msgs } from "../utils";
import { CustomError } from "./Custom";

export class RateLimitError extends CustomError {
  status = 429;

  readonly name = "RateLimitError";

  /**
   *
   * @default too many requests. please try again later
   */
  constructor(public message: string = msgs[429]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
