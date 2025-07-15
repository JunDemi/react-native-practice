/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NoticeInfo } from './NoticeInfo';

/**
 * result set
 */
export type MainDashBoardResponse = {
  /**
   * 멤버
   */
  memberInfo?: {
    level?: number;
    packagePvTotal?: number;
    signalCycleRemain?: number;
    balanceUsdt?: number;
    signalRcm?: number;
    email?: string;
    name?: string;
  };
  income?: {
    payback?: number;
    recommend?: number;
    sponsor?: number;
    sharingOne?: number;
    //sharingTwo?: number;
    //teamBuildingOne?: number;
    //teamBuildingTwo?: number;
    //leadership?: number;
    share?: number;
    center?: number;
    total?: number;
  };
  /**
   * 공지사항
   */
  notices?: Array<NoticeInfo>;
  /**
   * 자료
   */
  resources?: Array<NoticeInfo>;
};
