import { CustomError } from "./custom";
import type { ErrorProps, CustomErrorParam } from "../types";
import { msg } from "../utils";

export class ValidationError extends CustomError {
  readonly status = 422;

  readonly name = "CustomValidationError";

  private readonly params: CustomErrorParam;

  constructor(params: ErrorProps | ErrorProps[]) {
    super(msg(params));

    this.params = params;
  }

  serialize() {
    return this.parse(this.params);
  }
}
