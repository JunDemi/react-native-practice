import { ResponseObject } from '@dataTypes/swagger';
import { MainDashBoardResponse } from '@dataTypes/swagger/models/MainDashBoardResponse';
import { BannerResponse } from '@dataTypes/swagger/models/BannerResponse';
import { PopupResponse } from '@dataTypes/swagger/models/PopupResponse';
export namespace NSGetAdminPopup {
  export interface Response
    extends ResponseObject<{
      infos?: PopupResponse[];
    }> {}
}
export namespace NSGetAdminBanner {
  export interface Response extends ResponseObject<BannerResponse> {}
}
export namespace NSGetDashboard {
  export interface Response extends ResponseObject<MainDashBoardResponse> {}
}
