/** state中的key */
export enum RecommendStateKey {
  BANNER_LIST = "bannerList",
  RECOMMEND_LIST = "recommendList",
  ENTER_LOADING = "enterLoading",
}

export type RecommendActions =
  | {
      type: "recommend/change_banner";
      data: ObjWithImmutable<BannerList>;
    }
  | {
      type: "recommend/change_recommend_list";
      data: ObjWithImmutable<RecommendList>;
    }
  | {
      type: "recommend/change_loading";
      data: boolean;
    };

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
  [RecommendStateKey.BANNER_LIST]: ObjWithImmutable<BannerList>;
  [RecommendStateKey.RECOMMEND_LIST]: ObjWithImmutable<RecommendList>;
  [RecommendStateKey.ENTER_LOADING]: boolean;
}

/** state保存的是immutable包裹的数据 */
export type RecommendState = ObjWithImmutable<RecommendStateJs>;
