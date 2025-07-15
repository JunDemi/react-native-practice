/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { File } from './File';
import { NoticeSummary } from './NoticeSummary';

/**
 * result set
 */
export type NoticeDetailResponse = {
  /**
   * 공지사항 식별번호
   */
  no?: number;
  /**
   * 작성자
   */
  name?: string;
  /**
   * 최종 작성일 정보
   */
  updateDt?: string;
  /**
   * 게시글 제목
   */
  title?: string;
  /**
   * 게시글 본문
   */
  content?: string;
  /**
   * 첨부 파일리스트
   */
  fileList?: Array<File>;
  /**
   * 팝업 또는 공지 표출 상태
   */
  topStatus?: boolean;
  /**
   * 이전, 다음 글 정보
   */
  noticeSummaryList?: Array<NoticeSummary>;

  type: string;
};
