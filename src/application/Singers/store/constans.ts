export enum SingerStateKeys {
  SINGER_LIST = "singerList",
  ENTER_LOADING = "enterLoading",
  PULL_UP_LOADING = "pullUpLoading",
  PULL_DOWN_LOADING = "pullDownLoading",
  PAGE_NUMBER = "pageNumber",
}

export type SingerActions =
  | {
      type: "singers/change_singer_list";
      data: ObjWithImmutable<SingerList>;
    }
  | {
      type: "singers/change_loading";
      data: boolean;
    }
  | {
      type: "singers/change_pull_up_loading";
      data: boolean;
    }
  | {
      type: "singers/change_pull_down_loading";
      data: boolean;
    }
  | {
      type: "singers/change_page_number";
      data: number;
    };

export interface SingerInfo {
  accountId: number;
  albumSize: number;
  alias: Array<string>;
  briefDesc: string;
  followed: boolean;
  id: number;
  img1v1Id: number;
  img1v1Id_str: string;
  img1v1Url: string;
  musicSize: number;
  name: string;
  picId: number;
  picId_str: string;
  picUrl: string;
  topicPerson: number;
  trans: string;
}

export type SingerList = Array<SingerInfo>;

export interface SingerStateJS {
  [SingerStateKeys.SINGER_LIST]: ObjWithImmutable<SingerList>;
  [SingerStateKeys.ENTER_LOADING]: boolean;
  [SingerStateKeys.PULL_UP_LOADING]: boolean;
  [SingerStateKeys.PULL_DOWN_LOADING]: boolean;
  [SingerStateKeys.PAGE_NUMBER]: number;
}

export type SingerState = ObjWithImmutable<SingerStateJS>;
