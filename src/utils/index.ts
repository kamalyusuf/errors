import { ValidationErrorItem } from "joi";
import { CustomErrorParam } from "../types";

export const msg = (
  param: ValidationErrorItem[] | CustomErrorParam
): string => {
  if (typeof param === "string") return param;

  if (!Array.isArray(param)) return param.message;

  return param.map((p) => (typeof p === "string" ? p : p.message)).join(", ");
};

export const msgs = {
  403: "thou shalt not",
  500: "internal server error",
  401: "you shall not pass",
  404: "not found",
  429: "too many requests. please try again later"
};

export const setGlobalMessage = (t: Partial<typeof msgs>) => {
  Object.assign(msgs, t);
};
