import type { CustomErrorParam, ErrorProps } from "../types.js";
import { msg } from "../utils.js";
import { CustomError } from "./custom.js";

export class SomeError extends CustomError {
  readonly status: number;

  readonly name = "SomeError";

  private readonly param: CustomErrorParam;

  constructor(status: number, message: string);
  constructor(status: number, props: ErrorProps);
  constructor(status: number, props: Array<string | ErrorProps>);
  constructor(status: number, param: CustomErrorParam) {
    super(msg(param));

    this.param = param;
    this.status = status;
  }

  serialize() {
    return this.parse(this.param);
  }
}
