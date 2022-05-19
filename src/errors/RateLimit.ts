import { msgs } from "../utils";
import { CustomError } from "./Custom";

export class RateLimitError extends CustomError {
  status = 429;

  constructor(public message: string = msgs[429]) {
    super(message);

    Object.setPrototypeOf(this, RateLimitError.prototype);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
