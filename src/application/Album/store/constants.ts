export type AlbumActions = 
  | {
      type: "album/change_current_album",
      data: ObjWithImmutable<AlbumData>
    }
  | {
    type: "album/change_enter_loading",
    data: boolean
  }
    

export interface AlbumData {
  creator: { avatarUrl: string, nickname: string },
  coverImgUrl: string,
  subscribedCount: number,
  name: string,
  tracks: Array<AlbumTrack>
}

interface AlbumTrack {
  name: string,
  ar: Array<{name: string}>,
  al: { name: string }
}

interface AlbumStateJs {
  currentAlbum: ObjWithImmutable<AlbumData>,
  enterLoading: boolean
}

export type AlubmState = ObjWithImmutable<AlbumStateJs>