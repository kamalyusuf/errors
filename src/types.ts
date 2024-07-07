export interface ErrorProps {
  message: string;
  path?: string;
  source?: ErrorSource;
  [key: string]: string | number | boolean | undefined;
}

export type CustomErrorParam = string | ErrorProps | Array<string | ErrorProps>;

export type ErrorStatus = 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500;

export type ErrorSource = "body" | "params" | "query";
