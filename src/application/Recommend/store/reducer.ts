import { fromJS } from "immutable";
import {
  RecommendActions,
  RecommendActionsType,
  RecommendState,
  RecommendStateKey,
} from "./constants";

const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
  enterLoading: true,
}) as RecommendState;

const reducer = (state = defaultState, { type, data }: RecommendActions) => {
  switch (type) {
    case RecommendActionsType.CHANGE_BANNER_LIST:
      // TODO reducer不能改变state，immutable是怎么做到的不改变？
      return state.set(RecommendStateKey.BANNER_LIST, data);
    case RecommendActionsType.CHANGE_RECOMMEND_LIST:
      return state.set(RecommendStateKey.RECOMMEND_LIST, data);
    case RecommendActionsType.CHANGE_ENTER_LOADING:
      return state.set(RecommendStateKey.ENTER_LOADING, data);
    default:
      return state;
  }
};

export default reducer;
