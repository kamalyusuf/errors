import { ErrorProps } from "../types";
import { CustomError } from "./Custom";

export class UnprocessableEntityError extends CustomError {
  status = 422;

  readonly name = "UnprocessableEntityError";

  public params?: ErrorProps;

  constructor(message: string);
  constructor(props: ErrorProps);
  constructor(props: string | ErrorProps) {
    super(typeof props === "string" ? props : props.message);

    if (typeof props !== "string") this.params = props;
  }

  serialize() {
    return this.params ? [this.params] : [{ message: this.message }];
  }
}
