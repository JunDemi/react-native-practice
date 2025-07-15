import { ResponseObject } from '@dataTypes/swagger';
import {
  OrderResponse,
  WithdrawalOrderRequest,
} from '@dataTypes/swagger';

export namespace NSPostWithdrawal {
  export interface Response extends ResponseObject<OrderResponse> {}
  export interface Request extends WithdrawalOrderRequest {}
}