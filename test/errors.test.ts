import { describe, it, expect } from "vitest";
import {
  BadRequestError,
  NotFoundError,
  NotAuthorizedError,
  ForbiddenError,
  InternalServerError,
  RateLimitError,
  ValidationError,
  JoiValidationError
} from "../src";

describe("errors", () => {
  it("throws BadRequestError", () => {
    expect(() => {
      throw new BadRequestError("bad error");
    }).toThrow(BadRequestError);
  });

  it("throws NotAuthorizedError", () => {
    expect(() => {
      throw new NotAuthorizedError();
    }).toThrow(NotAuthorizedError);
  });

  it("throws ForbiddenError", () => {
    expect(() => {
      throw new ForbiddenError();
    }).toThrow(ForbiddenError);
  });

  it("throws InternalServerError", () => {
    expect(() => {
      throw new InternalServerError();
    }).toThrow(InternalServerError);
  });

  it("throws NotFoundError", () => {
    expect(() => {
      throw new NotFoundError("not found");
    }).toThrow(NotFoundError);
  });

  it("throws RateLimitError", () => {
    expect(() => {
      throw new RateLimitError();
    }).toThrow(RateLimitError);
  });

  it("throws ValidationError", () => {
    expect(() => {
      throw new ValidationError({ message: "invalid data" });
    }).toThrow(ValidationError);
  });

  it("throws JoiValidationError", () => {
    expect(() => {
      throw new JoiValidationError([]);
    }).toThrow(JoiValidationError);
  });
});
