import { getRankListRequest } from "./../../../api/request";
import { fromJS } from "immutable";

type RankActions =
  | {
      type: "rank/change_global_rank_list" | "rank/change_official_rank_list";
      data: ObjWithImmutable<Array<RankInfo>>;
    }
  | {
      type: "rank/change_loading";
      data: boolean;
    };

export type TracksList = Array<{ first?: string; second?: string }>;

export interface RankInfo {
  subscribers: Array<any>;
  subscribed: null;
  creator: null;
  artists: null;
  tracks: TracksList;
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl: null;
  titleImage: number;
  titleImageUrl: null;
  englishTitle: null;
  opRecommend: false;
  recommendInfo: null;
  description: string;
  status: number;
  ordered: boolean;
  userId: number;
  trackNumberUpdateTime: number;
  createTime: number;
  highQuality: boolean;
  coverImgUrl: string;
  newImported: boolean;
  coverImgId: number;
  updateTime: number;
  trackCount: number;
  trackUpdateTime: number;
  adType: number;
  anonimous: false;
  totalDuration: number;
  specialType: number;
  commentThreadId: string;
  playCount: number;
  privacy: number;
  subscribedCount: number;
  cloudTrackCount: number;
  tags: Array<string>;
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType: string;
}

export type RankList = Array<RankInfo>;

interface RankStateJs {
  globalRankList: ObjWithImmutable<Array<RankInfo>>;
  officialRankList: ObjWithImmutable<Array<RankInfo>>;
  loading: boolean;
}

type RankState = ObjWithImmutable<RankStateJs>;

/** 修改全球榜 */
const changeGlobalRankList = (data: Array<RankInfo>) => ({
  type: "rank/change_global_rank_list",
  data: fromJS(data),
});

/** 修改全国榜 */
const changeOfficialRankList = (data: Array<RankInfo>) => ({
  type: "rank/change_official_rank_list",
  data: fromJS(data),
});

export const changeLoading = (data: boolean) => ({
  type: "rank/change_loading",
  data: data,
});

export const getRankList = () => {
  return (dispatch: any) => {
    getRankListRequest().then((data) => {
      // 处理全球榜和官方榜
      const list = (data?.list as RankList) || [];
      let limitIndex = -1;
      for (let i = 0; i < list.length - 1; i++) {
        if (list[i].tracks && list[i].tracks.length === 0) {
          limitIndex = i - 1;
          break;
        }
      }

      const officialRankList = list.slice(0, limitIndex + 1);
      const globalRankList = list.slice(limitIndex + 1);

      dispatch(changeGlobalRankList(globalRankList));
      dispatch(changeOfficialRankList(officialRankList));
      dispatch(changeLoading(false));
    });
  };
};

const initialState = fromJS({
  globalRankList: fromJS([]), // 全球榜
  officialRankList: fromJS([]), // 官方榜
  loading: true,
}) as RankState;

export const reducer = (state = initialState, actions: RankActions) => {
  switch (actions.type) {
    case "rank/change_loading":
      return state.set("loading", actions.data);
    case "rank/change_global_rank_list":
      return state.set("globalRankList", actions.data);
    case "rank/change_official_rank_list":
      return state.set("officialRankList", actions.data);
    default:
      return state;
  }
};
