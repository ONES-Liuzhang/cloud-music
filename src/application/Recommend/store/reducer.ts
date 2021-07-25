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
}) as RecommendState;

const reducer = (
  state = defaultState,
  actions: RecommendActions<RecommendActionsType>
) => {
  switch (actions.type) {
    case RecommendActionsType.CHANGE_BANNER:
      // TODO reducer不能改变state，immutable是怎么做到的不改变？
      return state.set(RecommendStateKey.BANNER_LIST, actions.data);
    case RecommendActionsType.CHANGE_RECOMMEND_LIST:
      return state.set(RecommendStateKey.RECOMMEND_LIST, actions.data);
    default:
      return state;
  }
};

export default reducer;
