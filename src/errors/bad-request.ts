import type { CustomErrorParam, ErrorLocation, ErrorProps } from "../types";
import { msg } from "../utils";
import { CustomError } from "./custom";

export class BadRequestError extends CustomError {
  readonly status = 400;

  readonly name = "BadRequestError";

  private readonly location?: ErrorLocation;

  private readonly params: CustomErrorParam;

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
