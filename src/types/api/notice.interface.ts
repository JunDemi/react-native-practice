import { ResponseObject } from '@dataTypes/swagger';
import { CommonListResultNoticeInfo } from '@dataTypes/swagger/models/CommonListResultNoticeInfo';
import { NoticeDetailResponse } from '@dataTypes/swagger/models/NoticeDetailResponse';
export namespace NSGetNoticeBoard {
  export interface Response extends ResponseObject<CommonListResultNoticeInfo> {}
  export interface Request {
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
    /**
     * id
     */
    id?: string;
    /**
     * 검색어
     */
    keyword?: string;
    /**
     * 검색 카테고리
     */
    category?: string;
  }
}

export namespace NSGetNotice {
  export interface Response extends ResponseObject<NoticeDetailResponse> {}
  export interface Request {
    postNo: number;
  }
}
