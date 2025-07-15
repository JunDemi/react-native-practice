import { SearchRequest } from '@dataTypes/api/common.interface';
import { ResponseObject } from '@dataTypes/swagger';
import { CommonListResultWithdrawalInfo } from '@dataTypes/swagger/models/CommonListResultWithdrawalInfo';
export namespace NSGetWithdrawalList {
  export interface Response extends ResponseObject<CommonListResultWithdrawalInfo> {}
  export interface Request extends SearchRequest {}
}
