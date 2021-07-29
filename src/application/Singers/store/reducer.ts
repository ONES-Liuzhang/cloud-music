import {
  SingerState,
  SingerActions,
  SingerActionsType,
  SingerStateKeys,
} from "./constans";
import { fromJS } from "immutable";

const defaultState = fromJS({
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  pageNumber: 0,
}) as SingerState;

const reducer = (state = defaultState, { type, data }: SingerActions) => {
  switch (type) {
    case SingerActionsType.CHANGE_SINGER_LIST:
      return state.set(SingerStateKeys.SINGER_LIST, data);
    case SingerActionsType.CHANGE_ENTER_LOADING:
      return state.set(SingerStateKeys.ENTER_LOADING, data);
    case SingerActionsType.CHANGE_PULL_UP_LOADING:
      return state.set(SingerStateKeys.PULL_UP_LOADING, data);
    case SingerActionsType.CHANGE_PULL_DOWN_LOADING:
      return state.set(SingerStateKeys.PULL_DOWN_LOADING, data);
    case SingerActionsType.CHANGE_PAGE_NUMBER:
      return state.set(SingerStateKeys.PAGE_NUMBER, data);
    default:
      return state;
  }
};

export default reducer;
