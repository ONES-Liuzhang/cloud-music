/** actions的类型 */
export enum RecommendActionsType {
  CHANGE_BANNER = "recommend/change_banner",
  CHANGE_RECOMMEND_LIST = "recommend/change_recommend_list",
}

/** state中的key */
export enum RecommendStateKey {
  BANNER_LIST = "bannerList",
  RECOMMEND_LIST = "recommendList",
}

/** 建立actions type 和 state key 的关联 */
export interface RecommendStateMap {
  [RecommendActionsType.CHANGE_BANNER]: RecommendStateKey.BANNER_LIST;
  [RecommendActionsType.CHANGE_RECOMMEND_LIST]: RecommendStateKey.RECOMMEND_LIST;
}

export interface RecommendActions<T extends RecommendActionsType> {
  type: T;
  data: RecommendState[RecommendStateMap[T]];
}

export interface BannerData {
  imageUrl: string;
  targetId: number;
  adid: null;
  targetType: 1;
  titleColor: string;
  typeTitle: string;
  url: null;
  exclusive: false;
  monitorImpress: null;
  monitorClick: null;
  monitorType: null;
  monitorImpressList: null;
  monitorClickList: null;
  monitorBlackList: null;
  extMonitor: null;
  extMonitorInfo: null;
  adSource: null;
  adLocation: null;
  adDispatchJson: null;
  encodeId: string;
  program: null;
  event: null;
  video: null;
  song: null;
  scm: string;
}

export interface RecommendData {
  id: number;
  type: 0 | 1 | 2; // TODO type有哪些值
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

export type BannerList = Array<BannerData>;

export type RecommendList = Array<RecommendData>;

interface RecommendStateJs {
  [RecommendStateKey.BANNER_LIST]: BannerList;
  [RecommendStateKey.RECOMMEND_LIST]: RecommendList;
}

/** state保存的是immutable包裹的数据 */
export type RecommendState = ObjWithImmutable<RecommendStateJs>;
