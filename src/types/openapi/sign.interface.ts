import { IPostEmailCheck } from '@dataTypes/api/sign.interface';
import { ResponseObject } from '@dataTypes/swagger';
import {
  CertEmailRequest,
  CertResetPwdRequest,
  CertRestPwdEmailRequest,
  CheckEmailResponse,
  CreateMemberRequest,
  LoginRequest,
  LoginResponse,
  SendEmailRequest,
} from '@dataTypes/swagger';
export namespace NSPostSignLogin {
  export interface Response extends ResponseObject<LoginResponse> {}
  export interface Request extends LoginRequest {
    certNum?: string;
  }
}

export namespace NSPostSignRegister {
  export interface Response extends ResponseObject<IPostEmailCheck> {}
  export interface Request extends CreateMemberRequest {}
}

export namespace NSPostSignRegisterEmailCheck {
  export interface Response extends ResponseObject<CheckEmailResponse> {}
  export interface Request extends CertEmailRequest {}
}

export namespace NSPostSignRegisterEmailSend {
  export interface Response extends ResponseObject<string> {}
  export interface Request extends SendEmailRequest {}
}

export namespace NSPostSignResetPwdEmailCheck {
  export interface Response extends ResponseObject<string> {}
  export interface Request extends CertRestPwdEmailRequest {}
}

export namespace NSPostSignResetPwdEmailSend {
  export interface Response extends ResponseObject<string> {}
  export interface Request extends CertResetPwdRequest {}
}
