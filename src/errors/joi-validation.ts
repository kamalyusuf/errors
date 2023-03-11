import type { ValidationErrorItem } from "joi";
import { CustomError } from "./custom";
import type { ErrorLocation } from "../types";
import { msg } from "../utils";

export class JoiValidationError extends CustomError {
  readonly status = 422;

  readonly name = "JoiValidationError";

  constructor(
    public errors: ValidationErrorItem[],
    public location?: ErrorLocation
  ) {
    super(msg(errors));
  }

  serialize() {
    return this.errors.map((error) => ({
      message: error.message,
      path: error.path[0]?.toString(),
      location: this.location
    }));
  }
}
