export interface ErrorProps {
  message: string;
  path?: string;
  [key: string]: string | number | boolean | undefined;
}

export type CustomErrorParam =
  | string
  | string[]
  | ErrorProps
  | ErrorProps[]
  | Array<string | ErrorProps>;

export type ErrorStatus = 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500;
