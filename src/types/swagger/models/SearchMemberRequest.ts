/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchMemberRequest = {
  /**
   * 시작일자
   */
  startDate?: string;
  /**
   * 마감일자
   */
  endDate?: string;
  /**
   * 아이디
   */
  id?: string;
  /**
   * 이름
   */
  name?: string;
  /**
   * 이메일
   */
  email?: string;
  /**
   * 아이디
   */
  userType?: string;
  /**
   * 구분
   */
  category?: string;
  /**
   * type
   */
  type?: string;
  /**
   * desc or asc
   */
  status?: string;
  /**
   * 아이디
   */
  rcmId?: string;
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
};
