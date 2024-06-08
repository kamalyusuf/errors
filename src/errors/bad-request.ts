import type { CustomErrorParam, ErrorProps } from "../types.js";
import { msg } from "../utils.js";
import { CustomError } from "./custom.js";

export class BadRequestError extends CustomError {
  readonly status = 400;

  readonly name = "BadRequestError";

  private readonly param: CustomErrorParam;

  constructor(message: string);
  constructor(props: ErrorProps);
  constructor(props: Array<string | ErrorProps>);
  constructor(param: CustomErrorParam) {
    super(msg(param));

    this.param = param;
  }

  serialize() {
    return this.parse(this.param);
  }
}
