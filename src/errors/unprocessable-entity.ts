import type { ErrorProps, CustomErrorParam } from "../types";
import { CustomError } from "./custom";
import { msg } from "../utils";

export class UnprocessableEntityError extends CustomError {
  readonly status = 422;

  readonly name = "UnprocessableEntityError";

  private readonly param: CustomErrorParam;

  constructor(message: string);
  constructor(props: ErrorProps);
  constructor(props: Array<string | ErrorProps>);
  constructor(param: CustomErrorParam) {
    super(msg(param));

    this.param = param;
  }

  serialize() {
    return this.parse(this.param);
  }
}
