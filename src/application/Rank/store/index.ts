import { getRankListRequest } from "./../../../api/request";
import { fromJS } from "immutable";

type RankActions =
  | {
      type: "rank/change_rank_list";
      data: ObjWithImmutable<Array<RankInfo>>;
    }
  | {
      type: "rank/change_loading";
      data: boolean;
    };

interface RankInfo {
  subscribers: Array<any>;
  subscribed: null;
  creator: null;
  artists: null;
  tracks: Array<{ first?: string; second?: string }>;
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

interface RankStateJs {
  rankList: ObjWithImmutable<Array<RankInfo>>;
  loading: boolean;
}

type RankState = ObjWithImmutable<RankStateJs>;

const changeRankList = (data: Array<RankInfo>) => ({
  type: "rank/change_rank_list",
  data: fromJS(data),
});

export const changeLoading = (data: boolean) => ({
  type: "rank/chang_loading",
  data: data,
});

export const getRankList = () => {
  return (dispatch: any) => {
    getRankListRequest().then((data) => {
      dispatch(changeRankList(data.list));
      dispatch(changeLoading(false));
    });
  };
};

const initialState = fromJS({
  rankList: [],
  loading: true,
}) as RankState;

export const reducer = (state = initialState, actions: RankActions) => {
  switch (actions.type) {
    case "rank/change_loading":
      return state.set("loading", actions.data);
    case "rank/change_rank_list":
      return state.set("rankList", actions.data);
    default:
      return state;
  }
};
