export type MembershipCardResponse = {
  no?: number;
  buyDt?: string;
  expiryDt?: string;
  type?: string;
  name?: string;
  userName?: string;
  payUsdt?: number;
  status?: number;
  cycleOri?: number;
  cycleRemain?: number;
  recognizeType?: number;
  txHash: string;
  cancel?: boolean;
  paybackPaid?: boolean | number;
  managerPaid?: boolean | number;
};
