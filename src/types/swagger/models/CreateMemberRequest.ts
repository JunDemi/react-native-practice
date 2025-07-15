/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateMemberRequest = {
  /**
   * 국가
   */
  country: string;
  /**
   * 이메일
   */
  email: string;
  /**
   * 이름
   */
  username: string;
  /**
   * 비밀번호
   */
  password: string;
  /**
   * 국가 코드
   */
  mcc: string;
  /**
   * 전화번호
   */
  mobile: string;
  /**
   * 이메일 인증코드
   */
  certEmailNo: number;
  /**
   * 비밀번호 확인
   */
  confPassword: string;
  /**
   * 추천인 코드
   */
  recommender?: string;
  /**
   * 후원인 코드
   */
  sponsor?: string;
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
};
