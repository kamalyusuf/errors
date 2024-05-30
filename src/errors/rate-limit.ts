import { messages } from "../utils";
import { CustomError } from "./custom";

export class RateLimitError extends CustomError {
  readonly status = 429;

  readonly name = "RateLimitError";

  constructor(public message: string = messages[429]) {
    super(message);
  }

  serialize() {
    return [{ message: this.message }];
  }
}
