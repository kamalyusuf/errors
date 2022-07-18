import { CustomErrorParam, Location, ErrorProps } from "../types";
import { msg } from "../utils";
import { CustomError } from "./Custom";

export class BadRequestError extends CustomError {
  status = 400;

  readonly name = "BadRequestError";

  public path?: string;

  public location?: Location;

  public params: CustomErrorParam;

  constructor(message: string, location?: Location);
  constructor(messages: string[]);
  constructor(props: ErrorProps);
  constructor(props: ErrorProps[]);
  constructor(props: Array<string | ErrorProps>);
  constructor(params: CustomErrorParam, location?: Location) {
    super(msg(params));

    this.params = params;
    this.location = location;
  }

  serialize() {
    return this.parse(this.params, this.location);
  }
}
