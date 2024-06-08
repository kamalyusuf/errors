import { CustomError } from "./custom.js";
import type { ErrorProps, CustomErrorParam } from "../types.js";
import { msg } from "../utils.js";

export class ConflictError extends CustomError {
  readonly status = 409;

  readonly name = "ConflictError";

  private readonly param: CustomErrorParam;

  constructor(message: string);
  constructor(props: ErrorProps);
  constructor(param: string | ErrorProps) {
    super(msg(param));

    this.param = param;
  }

  serialize() {
    return this.parse(this.param);
  }
}
