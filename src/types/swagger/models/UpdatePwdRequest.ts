/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePwdRequest = {
   /**
   * 기존 비밀번호
   */
   prePassword: string;
   /**
    * 변경할 비밀번호
    */
   newPassword: string;
   /**
    * 비밀번호 확인
    */
   confPassword: string;
   /**
    * 인증메일 식별번호
    */
   certEmailNo: number;
   /**
    * OTP 인증 코드
    */
   certNum?: string;
};

