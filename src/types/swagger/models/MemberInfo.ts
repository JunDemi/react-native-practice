/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/** 사용자 정보 */
export type MemberInfo = {
  /** 사용자 식별번호 */
  no?: number;
  /** 이름 */
  name?: string;
  /** 레벨 */
  level?: number;
  /** role */
  role?: string;
  /** email */
  email?: string;
  /** OTP 인증 여부 */
  otp?: boolean;
  /** 남은 멤버십 이용기간 수 */
  signalRemain?: number;
  /** 거래소 */
  exchange?: string;
  /** uid */
  uid?: string;
  /** 국가 */
  country?: string;
  /** 지갑주소 */
  walletAddress?: string;
  /** 추천인 */
  recommender?: string;
  /** 레벨업 멤버십 구매 가능 여부  */
  levelPackage?: boolean;
  /** 센터 코드 */
  code?: string;
  /** 국가 코드 */
  mcc?: string;
  /** 전화번호 */
  mobile?: string;
};
