import { fromJS } from "immutable";
import {
  RecommendActions,
  RecommendActionsType,
  RecommendState,
  CHANGE_BANNER,
  CHANGE_RECOMMEND_LIST,
} from "./constants";

const defaultState: RecommendState = {
  bannerList: [],
  recommendList: [],
};

const stateFromJs = fromJS(defaultState) as any;

const reducer = (
  state = stateFromJs,
  actions: RecommendActions<RecommendActionsType>
) => {
  switch (actions.type) {
    case CHANGE_BANNER:
      return state.set("bannerList", actions.data);
    case CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", actions.data);
    default:
      return state;
  }
};

export default reducer;
