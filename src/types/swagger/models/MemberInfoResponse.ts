/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * result set
 */
export type MemberInfoResponse = {
  /** 이름 */
  username?: string;
  /** 국가 */
  country?: string;
  /** 지갑주소 */
  walletAddress?: string;
  /** 추천인 */
  recommender?: string;
  /** 이메일 */
  email?: string;
  /** 센터 코드 */
  code?: string;
  /** 국가 코드 */
  mcc?: string;
  /** 전화번호 */
  mobile?: string;
  /** 거래소 */
  exchange?: string;
  /** 거래소 UID */
  uid?: string;
  /** 남은 멤버십 이용기간  */
  signalRemain?: number;
  /** 레벨  */
  level?: number;
  /** 텔레그램 챗 아이디  */
  chatId?: string;
  /** 레벨업 멤버십 구매 가능 여부  */
  levelPackage?: boolean;
  /** 텔레그램 챗  */
  chat?: boolean;
};
