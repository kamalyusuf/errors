import type { ErrorProps, CustomErrorParam, ErrorSource } from "../types.js";
import { CustomError } from "./custom.js";
import { msg } from "../utils.js";

export class UnprocessableEntityError extends CustomError {
  readonly status = 422;

  readonly name = "UnprocessableEntityError";

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
