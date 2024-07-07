import type { CustomErrorParam, ErrorProps, ErrorSource } from "../types.js";
import { msg } from "../utils.js";
import { CustomError } from "./custom.js";

export class BadRequestError extends CustomError {
  readonly status = 400;

  readonly name = "BadRequestError";

  private readonly param: CustomErrorParam;

  public readonly source?: ErrorSource;

  constructor(message: string, source?: ErrorSource);
  constructor(props: ErrorProps);
  constructor(props: Array<string | ErrorProps>);
  constructor(param: CustomErrorParam, source?: ErrorSource) {
    super(msg(param));

    this.param = param;
    this.source = source;
  }

  serialize() {
    return this.parse(this.param, this.source);
  }
}
