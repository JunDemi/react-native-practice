/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMemberRequest = {
  /**
   * 이름
   */
  username?: string;
  /**
   * 인증메일 식별번호
   */
  certEmailNo?: number;

  mcc?: string;
  mobile?: string;

  walletAddress?: string;
  /**
   * 센터 코드
   */
  code?: string;
  /**
   * 거래소
   */
  exchange?: string;
  /**
   * 거래소 UID
   */
  uid?: string;
  /**
   * OTP 인증 코드
   */
  certNum?: string;
};
