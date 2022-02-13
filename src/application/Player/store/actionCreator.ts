import { fromJS } from 'immutable';
import { SongInfo } from '../../../types/business';
import { Actions, PlayList, State, PlayMode } from './constans';

export const changePlaying = (data: boolean): Actions => ({
  type: 'player/set_playing',
  data
})
export const changeFullScreen = (data: boolean): Actions => ({
  type: 'player/set_fullscreen',
  data
})
export const changePlayList = (data: PlayList): Actions => ({
  type: 'player/set_playlist',
  data: fromJS(data)
})
export const changeEnqueue = (data: number[]): Actions => ({
  type: 'player/set_enqueue',
  data
})
export const changePlayMode = (data: PlayMode): Actions => ({
  type: 'player/set_mode',
  data
})
export const changeCurrIndex = (data: number): Actions => ({
  type: 'player/set_curr_index',
  data
})
export const changeCurrSong = (data: SongInfo): Actions => ({
  type: 'player/set_curr_song',
  data: fromJS(data)
})