import { CustomError } from "./custom";
import type { ErrorProps, CustomErrorParam } from "../types";
import { msg } from "../utils";

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
