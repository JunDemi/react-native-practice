import { SearchRequest } from '@dataTypes/api/common.interface';
import { ResponseObject } from '@dataTypes/swagger';
import { CommonListResultLineInfo } from '@dataTypes/swagger/models/CommonListResultLineInfo';

export namespace NSGetLineSales {
  export interface Response extends ResponseObject<CommonListResultLineInfo> {}
  export interface Request extends SearchRequest {}
}