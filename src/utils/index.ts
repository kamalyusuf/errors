import type { ValidationErrorItem } from "joi";
import type { CustomErrorParam } from "../types";

export const msg = (
  param: ValidationErrorItem[] | CustomErrorParam,
  concat = true
) => {
  if (typeof param === "string") return param;

  if (!Array.isArray(param)) return param.message;

  if (concat)
    return param.map((p) => (typeof p === "string" ? p : p.message)).join(", ");

  const p = param[0];

  return typeof p === "string" ? p : p.message;
};

export const messages = {
  403: "thou shalt not",
  500: "internal server error",
  401: "you shall not pass",
  404: "not found",
  429: "too many requests. please try again later"
};

export const setdefaultmessage = (t: Partial<typeof messages>) => {
  Object.assign(messages, t);
};

export const ERRORS = [
  "BadRequestError",
  "ForbiddenError",
  "InternalServerError",
  "JoiValidationError",
  "NotAuthorizedError",
  "NotFoundError",
  "RateLimitError",
  "UnprocessableEntityError",
  "CustomValidationError",
  "ConflictError"
] as const;

export type ICustomError = (typeof ERRORS)[number];
