/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { LevelInfo } from "./LevelInfo";

interface LineMemeberMembershipInfo {
  /**
   * 라인 매출
   */
  saleVolume?: number;
}

export type LineInfo = {
  /**
   * 이메일
   */
  no?: number;
  /**
   * 이메일
   */
  email?: string;
  /**
   * 이름
   */
  name?: string;
  /**
   * 레벨
   */
  level?: number;
  /**
   * 잔여 매출
   */
  pv?: number;
  /**
   * 라인 매출
   */
  packageInfo?: LineMemeberMembershipInfo;
  /**
   * 산하 레벨별 회원수
   */
  levelInfo?: Array<LevelInfo>;
};
