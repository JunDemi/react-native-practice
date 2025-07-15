/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WithdrawalInfo = {
  /**
   * 출금 식별번호
   */
  no?: number;
  /**
   * 수수료
   */
  fee?: number;
  /**
   * 출금신청액
   */
  point?: number;
  /**
   * 출금액
   */
  pointFinal?: number;
  /**
   * 신청 재화
   */
  coin?: string;
  /**
   * 출금 주소
   */
  //walletAddress?: string;
    /**
   * 거래소
   */
  exchange?: string;
    /**
   * UID
   */
  uid?: string;
  /**
   * 일시
   */
  createDt?: string;
  /**
   * 상태) 0=미승인, 1=승인완료, 2=관리자 취소
   */
  orderStatus?: number;
  /**
   * 사용자 id
   */
  memberId?: string;
};
