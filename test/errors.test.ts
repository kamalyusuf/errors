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
    const bre = new BadRequestError("bad error");

    expect(() => {
      throw bre;
    }).toThrow(BadRequestError);

    expect(bre.name).toEqual("BadRequestError");
  });

  it("throws NotAuthorizedError", () => {
    const nae = new NotAuthorizedError();
    expect(() => {
      throw nae;
    }).toThrow(NotAuthorizedError);

    expect(nae.name).toEqual("NotAuthorizedError");
  });

  it("throws ForbiddenError", () => {
    const fe = new ForbiddenError();

    expect(() => {
      throw fe;
    }).toThrow(ForbiddenError);

    expect(fe.name).toEqual("ForbiddenError");
  });

  it("throws InternalServerError", () => {
    const ise = new InternalServerError();

    expect(() => {
      throw ise;
    }).toThrow(InternalServerError);

    expect(ise.name).toEqual("InternalServerError");
  });

  it("throws NotFoundError", () => {
    const nfe = new NotFoundError("not found");
    expect(() => {
      throw nfe;
    }).toThrow(NotFoundError);

    expect(nfe.name).toEqual("NotFoundError");
  });

  it("throws RateLimitError", () => {
    const rle = new RateLimitError();

    expect(() => {
      throw rle;
    }).toThrow(RateLimitError);

    expect(rle.name).toEqual("RateLimitError");
  });

  it("throws ValidationError", () => {
    const ve = new ValidationError({ message: "invalid data" });

    expect(() => {
      throw ve;
    }).toThrow(ValidationError);

    expect(ve.name).toEqual("ValidationError");
  });

  it("throws JoiValidationError", () => {
    const jve = new JoiValidationError([]);

    expect(() => {
      throw jve;
    }).toThrow(JoiValidationError);

    expect(jve.name).toEqual("JoiValidationError");
  });
});
