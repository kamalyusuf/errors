import { messages } from "../utils.js";
import { CustomError } from "./custom.js";

export class RateLimitError extends CustomError {
  readonly status = 429;

  readonly name = "RateLimitError";

  constructor(public override message: string = messages[429]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
