import { SearchDateRequest } from '@dataTypes/api/common.interface';
import { ResponseObject } from '@dataTypes/swagger';
import { SearchPointResponse } from '@dataTypes/swagger/models/SearchPointResponse';

export namespace NSGetPointUsdp {
  export interface Response extends ResponseObject<SearchPointResponse> {}
  export interface Request extends SearchDateRequest {
    pointType?: string;
  }
}