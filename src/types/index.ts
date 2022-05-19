export interface ErrorProps {
  message: string;
  path?: string;
  location?: Location;
}

export type Location = "body" | "params" | "query";

export type CustomErrorParam =
  | string
  | string[]
  | ErrorProps
  | ErrorProps[]
  | Array<string | ErrorProps>;
