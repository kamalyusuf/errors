import type { CustomErrorParam, ErrorProps } from "../types";
import { messages } from "../utils";
import { CustomError } from "./custom";

export class NotAuthorizedError extends CustomError {
  readonly status = 401;

  readonly name = "NotAuthorizedError";

  private readonly param: CustomErrorParam;

  /**
   *
   * @default you shall not pass
   */
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
