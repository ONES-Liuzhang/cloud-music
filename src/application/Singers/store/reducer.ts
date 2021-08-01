import { SingerState, SingerActions, SingerStateKeys } from "./constans";
import { fromJS } from "immutable";

const initialState = fromJS({
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  pageNumber: 0,
}) as SingerState;

const reducer = (state = initialState, actions: SingerActions) => {
  switch (actions.type) {
    case "singers/change_singer_list":
      return state.set(SingerStateKeys.SINGER_LIST, actions.data);
    case "singers/change_loading":
      return state.set(SingerStateKeys.ENTER_LOADING, actions.data);
    case "singers/change_pull_up_loading":
      return state.set(SingerStateKeys.PULL_UP_LOADING, actions.data);
    case "singers/change_pull_down_loading":
      return state.set(SingerStateKeys.PULL_DOWN_LOADING, actions.data);
    case "singers/change_page_number":
      return state.set(SingerStateKeys.PAGE_NUMBER, actions.data);
    default:
      return state;
  }
};

export default reducer;
