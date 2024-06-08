import { ExtendableError } from "extendable-error";
import type { CustomErrorParam, ErrorProps, ErrorStatus } from "../types.js";
import type { ICustomError } from "../utils.js";

export abstract class CustomError extends ExtendableError {
  abstract status: ErrorStatus | number;

  abstract override name: ICustomError;

  protected constructor(message: string) {
    super(message);
  }

  parse(param: CustomErrorParam): ErrorProps[] {
    if (typeof param === "string") return [{ message: param }];

    if (Array.isArray(param))
      return param.map((p) => {
        if (typeof p === "string")
          return {
            message: p
          };

        return p;
      });

    return [param];
  }

  abstract serialize(): ErrorProps[];
}
