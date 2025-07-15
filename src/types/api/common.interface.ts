export interface IJWTToken {
  mbId: string;
  exp: number;
  mbNo: number;
  iat: number;
  username: string;
  role: string;
}

/* generated using openapi-typescript-codegen — do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchRequest = {
  /**
   * page
   */
  page?: number;
  /**
   * limit
   */
  limit?: number;
  /**
   * sortBy
   */
  sortBy?: string;
  /**
   * desc or asc
   */
  sortSeq?: string;
  /**
   * 시작일자
   */
  startDate?: string;
  /**
   * 마감일자
   */
  endDate?: string;
  /**
   * 타입
   */
  type?: string;
};

/* generated using openapi-typescript-codegen — do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchDateRequest = {
  startDate?: string;
  endDate?: string;
  selectValues?: string;
  page?: number;
  limit?: number;
};
