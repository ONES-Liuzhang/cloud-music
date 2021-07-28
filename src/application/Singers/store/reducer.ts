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
    default:
      return state;
  }
};

export default reducer;
