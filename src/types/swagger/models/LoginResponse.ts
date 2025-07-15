/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MemberInfo } from './MemberInfo';

/**
 * result set
 */
export type LoginResponse = {
  /**
   * access 토큰
   */
  accessToken?: string;
  /**
   * refresh 토큰
   */
  refreshToken?: string;
  memberInfo?: MemberInfo;
};

