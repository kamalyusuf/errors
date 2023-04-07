import { CustomError } from "./custom";
import type { ErrorProps, CustomErrorParam } from "../types";
import { msg } from "../utils";

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
