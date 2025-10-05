import type { CustomErrorParam } from "../types.js";
import { msg } from "../utils.js";
import { CustomError } from "./custom.js";

export class SomeError extends CustomError {
  readonly status: number;

  readonly name = "SomeError";

  private readonly param: CustomErrorParam;

  constructor(status: number, param: CustomErrorParam) {
    super(msg(param));

    this.param = param;
    this.status = status;
  }

  serialize() {
    return this.parse(this.param);
  }
}
