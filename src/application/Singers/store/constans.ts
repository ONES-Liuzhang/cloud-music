export enum SingerActionsType {
  CHANGE_SINGER_LIST = "singers/change_singer_list",
  CHANGE_ENTER_LOADING = "singers/change_loading",
  CHANGE_PULL_UP_LOADING = "singers/change_pull_up_loading", // 上拉到底
  CHANGE_PULL_DOWN_LOADING = "singers/change_pull_down_loading", // 下拉到顶
  CHANGE_PAGE_NUMBER = "singers/change_page_number",
}

export enum SingerStateKeys {
  SINGER_LIST = "singerList",
  ENTER_LOADING = "enterLoading",
  PULL_UP_LOADING = "pullUpLoading",
  PULL_DOWN_LOADING = "pullDownLoading",
  PAGE_NUMBER = "pageNumber",
}

export interface SingerStateMap {
  [SingerActionsType.CHANGE_SINGER_LIST]: SingerStateKeys.SINGER_LIST;
  [SingerActionsType.CHANGE_ENTER_LOADING]: SingerStateKeys.ENTER_LOADING;
  [SingerActionsType.CHANGE_PULL_UP_LOADING]: SingerStateKeys.PULL_UP_LOADING;
  [SingerActionsType.CHANGE_PULL_DOWN_LOADING]: SingerStateKeys.PULL_DOWN_LOADING;
  [SingerActionsType.CHANGE_PAGE_NUMBER]: SingerStateKeys.PAGE_NUMBER;
}

export interface SingerActions {
  type: SingerActionsType;
  data: SingerStateJS[SingerStateMap[SingerActionsType]];
}

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

export interface SingerStateJS {
  [SingerStateKeys.SINGER_LIST]: Array<SingerInfo>;
  [SingerStateKeys.ENTER_LOADING]: boolean;
  [SingerStateKeys.PULL_UP_LOADING]: boolean;
  [SingerStateKeys.PULL_DOWN_LOADING]: boolean;
  [SingerStateKeys.PAGE_NUMBER]: number;
}

export type SingerState = ObjWithImmutable<SingerStateJS>;
