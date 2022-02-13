import { SongInfo } from '../../../types/business';

export type Actions = 
  | {
    type: "player/set_fullscreen",
    data: boolean
  }
  | {
    type: "player/set_playing",
    data: boolean
  }
  | {
    type: "player/set_playlist",
    data: ObjWithImmutable<PlayList>
  }
  | {
    type: "player/set_enqueue",
    data: number[]
  }
  | {
    type: "player/set_mode",
    data: PlayMode
  }
  | {
    type: "player/set_curr_index",
    data: number
  }
  | {
    type: "player/set_curr_song",
    data: ObjWithImmutable<SongInfo>
  }

export enum PlayMode {
  SEQUENCE = "SEQUENCE",
  LOOP = "LOOP",
  RANDOM = "RANDOM"
}

export interface StateJs {
  playing: boolean;
  fullScreen: boolean;  // 是否全屏模式
  playList: ObjWithImmutable<PlayList>;
  enqueue: number[];  // 播放顺序下标
  mode: PlayMode;  // 播放模式
  currIndex: number; // 当前播放歌曲下标
  currSong: ObjWithImmutable<SongInfo>;
}

export type PlayList = Array<SongInfo>

export type State = ObjWithImmutable<StateJs>