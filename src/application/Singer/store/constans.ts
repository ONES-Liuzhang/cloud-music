import { IArtists, IAlbum } from './../../../types/business.d';
export interface ArtistInfo {
  picUrl: string,
  name: string,
  [propsName: string]: any
}

export type HotSongs = Array<SongInfo>

interface SongInfo {
  id: number,
  name: string,
  ar: IArtists,
  al: IAlbum,
  [propsName: string]: any
}

export type SingerActions = 
  | {
    type: "singer/change_singer",
    data: ObjWithImmutable<ArtistInfo>
  }
  | {
    type: "singer/change_enter_loading",
    data: boolean
  }
  | {
    type: "singer/change_hotsong_list",
    data: ObjWithImmutable<HotSongs>
  }

export type SingerStateJs = {
  artist: ObjWithImmutable<ArtistInfo>,
  enterLoading: boolean,
  hotSongs: ObjWithImmutable<HotSongs>
}

export type SingerState = ObjWithImmutable<SingerStateJs>