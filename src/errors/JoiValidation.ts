import { ValidationErrorItem } from "joi";
import { CustomError } from "./Custom";
import { Location } from "../types";
import { msg } from "../utils";

export class JoiValidationError extends CustomError {
  status = 422;

  readonly name = "JoiValidationError";

  constructor(
    public errors: ValidationErrorItem[],
    public location?: Location
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
