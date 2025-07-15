export type ResponseObject<T> = {
  code?: number;
  httpStatusCode?: number;
  result?: T;
  message?: string;
  error?: string;
  errors?: Array<string>;
};