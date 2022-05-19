import { CustomError } from "./Custom";
import { ErrorProps, CustomErrorParam } from "../types";
import { msg } from "../utils";

export class ValidationError extends CustomError {
  status = 422;

  public params: CustomErrorParam;

  constructor(params: ErrorProps | ErrorProps[]) {
    super(msg(params));

    this.params = params;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serialize() {
    return this.parse(this.params);
  }
}
