import { ResponseObject } from '@dataTypes/swagger';

/** request - 직접 추천인명단 설정 */
export interface IGetMemberRecommenderReq {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortSeq?: string;
  startDate?: string;
  endDate?: string;
  id?: string;
}

export interface IGetMemberRecommenderResult {
  no: number;
  email: string;
  name: string;
  createDt: string;
  level: number;
  pv: number;
  sponsor: boolean;
}

export interface IGetMemberRecommender {
  totalCount: number;
  list: Array<IGetMemberRecommenderResult>;
}

export interface IGetMemberSearch {
  no: number;
  id: string;
  name: string;
  isRcm?: boolean;
}
/** response - refresh 토큰 재발급 */
export interface IGetRefreshTokenRes extends ResponseObject<IGetRefreshToken> {}

// refresh 토큰 재발급
interface IGetRefreshToken {
  accessToken: string;
  refreshToken: string;
  memberInfo: {
    memberNo: number;
    id: string;
    name: string;
    level: number;
  };
}
