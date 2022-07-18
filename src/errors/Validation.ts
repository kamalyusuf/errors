import { CustomError } from "./Custom";
import { ErrorProps, CustomErrorParam } from "../types";
import { msg } from "../utils";

export class ValidationError extends CustomError {
  status = 422;

  // why CustomValidationError? to avoid conflict with mongoose's ValidationError
  readonly name = "CustomValidationError";

  public params: CustomErrorParam;

  constructor(params: ErrorProps | ErrorProps[]) {
    super(msg(params));

    this.params = params;
  }

  serialize() {
    return this.parse(this.params);
  }
}
