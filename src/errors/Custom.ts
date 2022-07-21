import { ExtendableError } from "extendable-error";
import { CustomErrorParam, ErrorProps, Location } from "../types";
import { ICustomError } from "../utils";

export abstract class CustomError extends ExtendableError {
  abstract status: number;

  abstract name: ICustomError;

  protected constructor(message: string) {
    super(message);
  }

  parse(param: CustomErrorParam, location?: Location): ErrorProps[] {
    if (typeof param === "string") {
      return [{ message: param, location }];
    }

    if (Array.isArray(param)) {
      return param.map((p) => {
        if (typeof p === "string") {
          return {
            message: p
          };
        }

        return {
          message: p.message,
          path: p.path,
          location: p.location
        };
      });
    }

    return [param];
  }

  abstract serialize(): ErrorProps[];
}
