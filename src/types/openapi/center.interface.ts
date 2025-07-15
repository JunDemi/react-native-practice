import { ResponseObject } from '@dataTypes/swagger';
import { CenterApplicationDetailResponse } from '@dataTypes/swagger/models/CenterApplicationDetailResponse';
import { CenterApplicationRequest } from '@dataTypes/swagger/models/CenterApplicationRequest';

export namespace NSPostCenterApply {
  export interface Request {
    fileList: string[];
    request: CenterApplicationRequest;
  }
  export interface Response extends ResponseObject<string> {}
}

export namespace NSGetCenterApply {
  export interface Response extends ResponseObject<CenterApplicationDetailResponse> {}
}

export interface CenterMemberResponse {
  centerMemberList?: {
    totalCount?: number;
    list?: CenterMemberList[];
  };
  totalUsdt?: number;
}

export interface CenterMemberList {
  no?: number;
  level?: number;
  email?: string;
  name?: string;
  rmcCnt?: number;
  recommender?: string;
  sponsor?: string;
  usdt?: number;
  centerCreateDt?: string;
}

export interface CenterInfoResponse {
  no?: number;
  memberNo?: number;
  email?: string;
  name?: string;
  country?: string;
  level?: number;
  levelPlus?: number;
  centerName?: string;
  groupName?: string;
  code?: string;
  count?: number;
  totalUsdp?: number;
  totalUsdpPlus?: number;
  createDt?: string;
  phoneNum?: string;
  address?: string;
  updateDt?: string;
}

export interface CenterMembershipResponse {
  totalCount?: number;
  list?: CenterMembershipList[];
}

export interface CenterMembershipList {
  no?: number;
  buyDt?: string;
  expiryDt?: string;
  type?: string;
  name?: string;
  userName?: string;
  payUsdt?: number;
  status?: number;
  country?: string;
  memberEmail?: string;
  cycleOri?: number;
  cycleRemain?: number;
  recognizeType?: number;
  txHash?: string;
  managerPaid?: boolean;
  cancel?: boolean;
  paybackPaid?: boolean;
}
