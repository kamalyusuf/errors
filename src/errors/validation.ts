import { CustomError } from "./custom.js";
import type { ErrorProps, CustomErrorParam } from "../types.js";
import { msg } from "../utils.js";

export class ValidationError extends CustomError {
  readonly status = 422;

  readonly name = "CustomValidationError";

  private readonly param: CustomErrorParam;

  constructor(param: ErrorProps | ErrorProps[]) {
    super(msg(param));

    this.param = param;
  }

  serialize() {
    return this.parse(this.param);
  }
}
