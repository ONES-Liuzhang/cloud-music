import { fromJS } from "immutable";
import { Actions, State, PlayMode } from './constans';

const initialState = fromJS({
  playing: false,
  fullScreen: false,
  playList: [],
  enqueue: [],
  mode: PlayMode.SEQUENCE,
  currIndex: -1,
  currSong: {}
}) as State

const reducer = function(state = initialState, actions: Actions) {
  switch(actions.type) {
    case 'player/set_curr_index':
      return state.set('currIndex', actions.data)
    case 'player/set_curr_song':
      return state.set('currSong', actions.data);
    case 'player/set_enqueue':
      return state.set('enqueue', actions.data);
    case 'player/set_fullscreen':
      return state.set('fullScreen', actions.data);
    case 'player/set_mode':
      return state.set('mode', actions.data);
    case 'player/set_playing':
     return state.set('playing', actions.data);
    case 'player/set_playlist':
     return state.set('playList', actions.data);
    default:
      return state
  }
}

export default reducer