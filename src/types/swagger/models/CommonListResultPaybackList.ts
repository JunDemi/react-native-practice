import { PaybackListResponse } from "./PaybackListResponse";

export type CommonListResultPaybackList = {
  totalCount?: number;
  list?: Array<PaybackListResponse>;
};
