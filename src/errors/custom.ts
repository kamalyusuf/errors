import { ExtendableError } from "extendable-error";
import type { CustomErrorParam, ErrorProps, ErrorStatus } from "../types";
import type { ICustomError } from "../utils";

export abstract class CustomError extends ExtendableError {
  abstract status: ErrorStatus | number;

  abstract name: ICustomError;

  protected constructor(message: string) {
    super(message);
  }

  parse(param: CustomErrorParam): ErrorProps[] {
    if (typeof param === "string") return [{ message: param }];

    if (Array.isArray(param))
      return param.map((p) => {
        if (typeof p === "string") {
          return {
            message: p
          };
        }

        return {
          message: p.message,
          path: p.path
        };
      });

    return [param];
  }

  abstract serialize(): ErrorProps[];
}
