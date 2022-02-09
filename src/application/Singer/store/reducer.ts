import { fromJS } from "immutable";
import { SingerActions, SingerState } from "./constans";

const initialState = fromJS({
  artist: {},
  enterLoading: false,
  hotSongs: []
}) as SingerState

const reducer = (state = initialState, actions: SingerActions) => {
  switch(actions.type) {
    case 'singer/change_singer': 
      return state.set('artist', actions.data)
    case 'singer/change_enter_loading':
      return state.set('enterLoading', actions.data)
    case 'singer/change_hotsong_list':
      return state.set('hotSongs', actions.data)
    default:
      return state
  }
}

export default reducer