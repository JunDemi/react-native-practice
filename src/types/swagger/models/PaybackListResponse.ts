export type PaybackListResponse = {
  no?: number;
  memberEmail?: string;
  packageOrderNo?: number;
  status?: number;
  createDt?: string;
  updateDt?: string;
  orderDt?: string;
  uid?: string;
  exchange?: string;
  payUsdt?: number;
  paybackUsdt?: number;
  packageName?: string;
  //walletAddress?: string;
  memo?: string;
};