import type { ValidationErrorItem } from "joi";
import { CustomError } from "./custom";
import { msg } from "../utils";

export class JoiValidationError extends CustomError {
  readonly status = 422;

  readonly name = "JoiValidationError";

  constructor(public errors: ValidationErrorItem[]) {
    super(msg(errors));
  }

  serialize() {
    return this.errors.map((error) => ({
      message: error.message,
      path: error.path[0]?.toString()
    }));
  }
}
