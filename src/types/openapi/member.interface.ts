import { IGetMemberRecommender, IGetMemberRecommenderReq } from '@dataTypes/api/member.interface';
import { ResponseObject } from '@dataTypes/swagger';
import {
  CheckCertNumRequest,
  CheckEmailResponse,
  MemberInfoResponse,
  OTPResponse,
  UpdateMemberRequest,
  UpdatePwdRequest,
} from '@dataTypes/swagger';
import { MemberTreeResponse } from '@dataTypes/swagger/models/MemberTreeResponse';

// 회원정보
export namespace NSGetMember {
  export interface Response extends ResponseObject<MemberInfoResponse> {}
}

// 회원정보 수정
export namespace NSPutMember {
  export interface Response extends ResponseObject<string> {}
  export interface Request extends UpdateMemberRequest {}
}

// 비밀번호 변경
export namespace NSPutMemberPwd {
  export interface Response extends ResponseObject<string> {}
  export interface Request extends UpdatePwdRequest {}
}

// OTP 초기화
export namespace NSPostMemberOtp {
  export interface Response extends ResponseObject<string> {}
  export interface Request extends CheckCertNumRequest {}
}

export namespace NSPostMemberCheck {
  export interface Response extends ResponseObject<CheckEmailResponse> {}
  export interface Request extends CheckCertNumRequest {}
}

// 이메일 전송
export namespace NSPostMemberSend {
  export interface Response extends ResponseObject<string> {}
  export interface Request {
    email: string;
  }
}

export namespace NSGetMemberOtp {
  export interface Response extends ResponseObject<OTPResponse> {}
}

export namespace NSGetMemberTree {
  export interface Response extends ResponseObject<MemberTreeResponse> {}
  export interface Request {
    treeType: 'recommend' | 'sponsor';
    mbId: string;
    depth: number;
  }
}

export namespace NSGetMemberRecommender {
  export interface Response extends ResponseObject<IGetMemberRecommender> {}
  export interface Request extends IGetMemberRecommenderReq {}
}

export namespace NSPutMemberSponsor {
  export interface Response extends ResponseObject<string> {}
  export interface Request {
    /**
     * 내 추천인 아이디
     */
    email: string;
    /**
     * 후원인 아이디
     */
    sponsorEmail: string;
  }
}
