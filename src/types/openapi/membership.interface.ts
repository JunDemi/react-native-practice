import { ResponseObject } from '@dataTypes/swagger';
import { CommonListResultMembershipCardDeliveryNo } from '@dataTypes/swagger/models/CommonListResultMembershipCardDeliveryNo';
import { CommonListResultPaybackList } from '@dataTypes/swagger/models/CommonListResultPaybackList';

export namespace NSGetMembershipCardNo {
  export interface Response extends ResponseObject<CommonListResultMembershipCardDeliveryNo> {}
  export interface Request {
    no?: number;
  }
}

export namespace NSGetPaybackList {
  export interface Response extends ResponseObject<CommonListResultPaybackList> {}
  export interface Request {
    no?: number;
  }
}

export namespace NSPostBuyMembership {
  export interface Response extends ResponseObject<any> {}
  export interface Request {
    /**
     * 구매할 멤버십
     */
    payUsdt: number;
    /**
     * 멤버십 타입
     */
    type: string;
  }
}

export namespace NSPutCancelMembership {
  export interface Response extends ResponseObject<any> {}
  export interface Request {
    no: number;
    type: string;
  }
}
export namespace NSPutBuyMembership {
  export interface Response extends ResponseObject<any> {}
  export interface Request {
    no: number;
    type: string;
    txHash: string;
  }
}
export namespace NSPutApplyPayback {
  export interface Response extends ResponseObject<any> {}
  export interface Request {
    exchange: string;
    uid: string;
  }
}
