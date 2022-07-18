import { CustomErrorParam, ErrorProps } from "../types";
import { msgs } from "../utils";
import { CustomError } from "./Custom";

export class NotAuthorizedError extends CustomError {
  status = 401;

  public params: CustomErrorParam;

  /**
   *
   * @default you shall not pass
   */
  constructor(message?: string);
  constructor(props?: ErrorProps);
  constructor(t: string | ErrorProps = msgs[401]) {
    super(typeof t === "string" ? t : t.message);

    this.params = t;
  }

  serialize() {
    return this.parse(this.params);
  }
}
