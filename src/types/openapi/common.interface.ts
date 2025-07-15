import { ResponseObject } from '@dataTypes/swagger';
import { CoinResponse } from '@dataTypes/swagger/models/CoinResponse';

export namespace NSGetCommon {
  export interface Response extends ResponseObject<CoinResponse> {}
  export interface Request {
    coinType: string;
  }
}