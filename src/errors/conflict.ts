import { CustomError } from "./custom";
import type { ErrorProps, CustomErrorParam } from "../types";
import { msg } from "../utils";

export class ConflictError extends CustomError {
  readonly status = 409;

  readonly name = "ConflictError";

  private readonly params: CustomErrorParam;

  constructor(message: string);
  constructor(props: ErrorProps);
  constructor(params: string | ErrorProps) {
    super(msg(params));

    this.params = params;
  }

  serialize() {
    return this.parse(this.params);
  }
}
