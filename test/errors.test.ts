import { describe, it, expect } from "vitest";
import {
  BadRequestError,
  NotFoundError,
  NotAuthorizedError,
  ForbiddenError,
  InternalServerError,
  RateLimitError,
  ValidationError,
  JoiValidationError,
  UnprocessableEntityError,
  ConflictError,
  SomeError
} from "../src/index.js";
import { messages } from "../src/utils.js";

describe("errors", () => {
  it("throws BadRequestError", () => {
    const badrequest = new BadRequestError("bad error", "body");

    expect(() => {
      throw badrequest;
    }).toThrow(BadRequestError);

    expect(badrequest.name).toEqual("BadRequestError");
    expect(badrequest.status).toEqual(400);
    expect(badrequest.message).toEqual("bad error");
    expect(badrequest.source).toEqual("body");
  });

  it("throws NotAuthorizedError", () => {
    const notauthorized = new NotAuthorizedError();

    expect(() => {
      throw notauthorized;
    }).toThrow(NotAuthorizedError);

    expect(notauthorized.name).toEqual("NotAuthorizedError");
    expect(notauthorized.status).toEqual(401);
    expect(notauthorized.message).toEqual(messages[401]);
  });

  it("throws ForbiddenError", () => {
    const forbidden = new ForbiddenError();

    expect(() => {
      throw forbidden;
    }).toThrow(ForbiddenError);

    expect(forbidden.name).toEqual("ForbiddenError");
    expect(forbidden.status).toEqual(403);
    expect(forbidden.message).toEqual(messages[403]);
  });

  it("throws InternalServerError", () => {
    const internalserver = new InternalServerError();

    expect(() => {
      throw internalserver;
    }).toThrow(InternalServerError);

    expect(internalserver.name).toEqual("InternalServerError");
    expect(internalserver.status).toEqual(500);
    expect(internalserver.message).toEqual(messages[500]);
  });

  it("throws NotFoundError", () => {
    const notfound = new NotFoundError("not found");

    expect(() => {
      throw notfound;
    }).toThrow(NotFoundError);

    expect(notfound.name).toEqual("NotFoundError");
    expect(notfound.status).toEqual(404);
    expect(notfound.message).toEqual("not found");
  });

  it("throws RateLimitError", () => {
    const ratelimit = new RateLimitError();

    expect(() => {
      throw ratelimit;
    }).toThrow(RateLimitError);

    expect(ratelimit.name).toEqual("RateLimitError");
    expect(ratelimit.status).toEqual(429);
    expect(ratelimit.message).toEqual(messages[429]);
  });

  it("throws ValidationError", () => {
    const validation = new ValidationError([
      { message: "invalid data" },
      { message: "error", path: "name", source: "body" }
    ]);

    expect(() => {
      throw validation;
    }).toThrow(ValidationError);

    const serialized = validation.serialize();

    expect(validation.name).toEqual("CustomValidationError");
    expect(validation.status).toEqual(422);
    expect(validation.message).toContain("invalid data");
    expect(serialized.at(0)?.source).toBeUndefined();
    expect(serialized.at(1)?.source).toBe("body");
  });

  it("throws JoiValidationError", () => {
    const joivalidation = new JoiValidationError(
      [{ message: "joi error", path: ["email"], type: "" }],
      "params"
    );

    expect(() => {
      throw joivalidation;
    }).toThrow(JoiValidationError);

    expect(joivalidation.name).toEqual("JoiValidationError");
    expect(joivalidation.status).toEqual(422);
    expect(joivalidation.message).toContain("joi error");
    expect(joivalidation.source).toEqual("params");
  });

  it("throws UnprocessableEntityError", () => {
    const unprocessable = new UnprocessableEntityError(
      "unprocessable",
      "query"
    );

    expect(() => {
      throw unprocessable;
    }).toThrow(UnprocessableEntityError);

    expect(unprocessable.name).toEqual("UnprocessableEntityError");
    expect(unprocessable.status).toEqual(422);
    expect(unprocessable.message).toEqual("unprocessable");
    expect(unprocessable.source).toEqual("query");
  });

  it("throws ConflictError", () => {
    const conflict = new ConflictError("conflict");

    expect(() => {
      throw conflict;
    }).toThrow(ConflictError);

    expect(conflict.name).toEqual("ConflictError");
    expect(conflict.status).toEqual(409);
    expect(conflict.message).toEqual("conflict");
  });

  it("throws SomeError", () => {
    const some = new SomeError(412, "precondition");

    expect(() => {
      throw some;
    }).toThrow(SomeError);

    expect(some.name).toEqual("SomeError");
    expect(some.status).toEqual(412);
    expect(some.message).toEqual("precondition");
  });

  it("allows arbitrary properties", () => {
    const error = new NotAuthorizedError({
      message: "email not verified",
      email: "test@email.com"
    });

    expect(() => {
      throw error;
    }).toThrow(NotAuthorizedError);

    expect(error.message).toEqual("email not verified");
    expect(error.serialize().at(0)!.email).toEqual("test@email.com");
  });
});
