import type { ValidationErrorItem } from "joi";
import { CustomError } from "./custom.js";
import { msg } from "../utils.js";
import type { ErrorProps, ErrorSource } from "../types.js";

export class JoiValidationError extends CustomError {
  readonly status = 422;

  readonly name = "JoiValidationError";

  constructor(
    public errors: ValidationErrorItem[],
    public readonly source?: ErrorSource
  ) {
    super(msg(errors));
  }

  serialize(): ErrorProps[] {
    return this.errors.map((error) => ({
      message: error.message,
      path: error.path.join("."),
      source: this.source
    }));
  }
}
