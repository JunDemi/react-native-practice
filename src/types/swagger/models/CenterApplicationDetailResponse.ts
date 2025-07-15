/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { CenterApplication } from "./CenterApplication";
import { FileInfo } from "./FileInfo";



/**
 * result set
 */
export type CenterApplicationDetailResponse = {
  centerApplication?: CenterApplication;
  /**
   * 첨부 파일리스트
   */
  fileList?: Array<FileInfo>;
};

