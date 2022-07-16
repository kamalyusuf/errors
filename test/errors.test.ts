import { describe, it, expect } from "vitest";
import { msgs } from "../src/utils/index";
import {
  BadRequestError,
  NotFoundError,
  NotAuthorizedError,
  ForbiddenError,
  InternalServerError,
  RateLimitError,
  ValidationError,
  JoiValidationError,
  UnprocessableEntityError
} from "../src";

describe("errors", () => {
  it("throws BadRequestError", () => {
    const bre = new BadRequestError("bad error");

    expect(() => {
      throw bre;
    }).toThrow(BadRequestError);

    expect(bre.name).toEqual("BadRequestError");
    expect(bre.status).toEqual(400);
    expect(bre.message).toEqual("bad error");
  });

  it("throws NotAuthorizedError", () => {
    const nae = new NotAuthorizedError();

    expect(() => {
      throw nae;
    }).toThrow(NotAuthorizedError);

    expect(nae.name).toEqual("NotAuthorizedError");
    expect(nae.status).toEqual(401);
    expect(nae.message).toEqual(msgs[401]);
  });

  it("throws ForbiddenError", () => {
    const fe = new ForbiddenError();

    expect(() => {
      throw fe;
    }).toThrow(ForbiddenError);

    expect(fe.name).toEqual("ForbiddenError");
    expect(fe.status).toEqual(403);
    expect(fe.message).toEqual(msgs[403]);
  });

  it("throws InternalServerError", () => {
    const ise = new InternalServerError();

    expect(() => {
      throw ise;
    }).toThrow(InternalServerError);

    expect(ise.name).toEqual("InternalServerError");
    expect(ise.status).toEqual(500);
    expect(ise.message).toEqual(msgs[500]);
  });

  it("throws NotFoundError", () => {
    const nfe = new NotFoundError("not found");

    expect(() => {
      throw nfe;
    }).toThrow(NotFoundError);

    expect(nfe.name).toEqual("NotFoundError");
    expect(nfe.status).toEqual(404);
    expect(nfe.message).toEqual("not found");
  });

  it("throws RateLimitError", () => {
    const rle = new RateLimitError();

    expect(() => {
      throw rle;
    }).toThrow(RateLimitError);

    expect(rle.name).toEqual("RateLimitError");
    expect(rle.status).toEqual(429);
    expect(rle.message).toEqual(msgs[429]);
  });

  it("throws ValidationError", () => {
    const ve = new ValidationError({ message: "invalid data" });

    expect(() => {
      throw ve;
    }).toThrow(ValidationError);

    expect(ve.name).toEqual("ValidationError");
    expect(ve.status).toEqual(422);
    expect(ve.message).toContain("invalid data");
  });

  it("throws JoiValidationError", () => {
    const jve = new JoiValidationError([
      { message: "joi error", path: ["email"], type: "" }
    ]);

    expect(() => {
      throw jve;
    }).toThrow(JoiValidationError);

    expect(jve.name).toEqual("JoiValidationError");
    expect(jve.status).toEqual(422);
    expect(jve.message).toContain("joi error");
  });

  it("throws UnprocessableEntityError", () => {
    const upee = new UnprocessableEntityError("unprocessable");

    expect(() => {
      throw upee;
    }).toThrow(UnprocessableEntityError);

    expect(upee.name).toEqual("UnprocessableEntityError");
    expect(upee.status).toEqual(422);
    expect(upee.message).toEqual("unprocessable");
  });
});
