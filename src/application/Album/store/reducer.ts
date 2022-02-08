import { fromJS } from "immutable";
import { AlbumActions, AlubmState } from "./constants";

const initialState = fromJS({
  currentAlbum: {},
  enterLoading: false
}) as AlubmState

const reducer = (state = initialState, action: AlbumActions) => {
  switch(action.type) {
    case 'album/change_current_album':
      return state.set('currentAlbum', action.data)
    case 'album/change_enter_loading':
      return state.set('enterLoading', action.data)
    default: 
      return state
  }
}

export default reducer