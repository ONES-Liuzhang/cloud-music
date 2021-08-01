import { fromJS } from "immutable";
import {
  RecommendActions,
  RecommendState,
  RecommendStateKey,
} from "./constants";

const initialState = fromJS({
  bannerList: [],
  recommendList: [],
  enterLoading: true,
}) as RecommendState;

const reducer = (state = initialState, actions: RecommendActions) => {
  switch (actions.type) {
    case "recommend/change_banner":
      // TODO reducer不能改变state，immutable是怎么做到的不改变？
      return state.set(RecommendStateKey.BANNER_LIST, actions.data);
    case "recommend/change_recommend_list":
      return state.set(RecommendStateKey.RECOMMEND_LIST, actions.data);
    case "recommend/change_loading":
      return state.set(RecommendStateKey.ENTER_LOADING, actions.data);
    default:
      return state;
  }
};

export default reducer;
