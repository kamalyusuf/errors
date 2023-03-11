import type { ErrorProps, CustomErrorParam, ErrorLocation } from "../types";
import { CustomError } from "./custom";

import { msg } from "../utils";

export class UnprocessableEntityError extends CustomError {
  readonly status = 422;

  readonly name = "UnprocessableEntityError";

  private readonly params: CustomErrorParam;

  private readonly location?: ErrorLocation;

  constructor(message: string, location?: ErrorLocation);
  constructor(messages: string[]);
  constructor(props: ErrorProps);
  constructor(props: ErrorProps[]);
  constructor(props: Array<string | ErrorProps>);
  constructor(params: CustomErrorParam, location?: ErrorLocation) {
    super(msg(params));

    this.params = params;
    this.location = location;
  }

  serialize() {
    return this.parse(this.params, this.location);
  }
}
