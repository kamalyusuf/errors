import type { CustomErrorParam, ErrorProps } from "../types.js";
import { messages } from "../utils.js";
import { CustomError } from "./custom.js";

export class NotAuthorizedError extends CustomError {
  readonly status = 401;

  readonly name = "NotAuthorizedError";

  private readonly param: CustomErrorParam;

  constructor(message?: string);
  constructor(props?: ErrorProps);
  constructor(t: string | ErrorProps = messages[401]) {
    super(typeof t === "string" ? t : t.message);

    this.param = t;
  }

  serialize() {
    return this.parse(this.param);
  }
}
