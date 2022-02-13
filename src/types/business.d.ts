export type IArtists = Array<{ name: string }>

export interface IAlbum {
  name: string
}

// 歌曲详情
export interface SongInfo {
  id: number,
  name: string,
  ar: IArtists,
  al: IAlbum,
  [propsName: string]: any
}