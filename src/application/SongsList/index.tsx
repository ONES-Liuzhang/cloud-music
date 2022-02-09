import React from "react"
import { Container, List } from './style'

interface SongListProps {
  songs: Array<Song>
}

interface Song {
  id: number,
  name: string,
  ar: Array<{ name: string }>, // 歌手名 articals 缩写
  al: {
    name: string // 专辑名 album 缩写
  },
  [propsName: string]: any
}

// 获取歌手
function getName(arr: Array<{ name: string, [propsName: string]: any }>) {
  return arr.map(o => o.name).join("/")
}

const SongsList = React.forwardRef<{}, SongListProps>(function SongsList(props, ref) {
  const { songs } = props

  const totalCount = songs.length

  return (
    <Container ref={ref}>
      <div className="first_line">
        <div className="play_all">
          <i className="iconfont">&#xe6e3;</i>
          <span>播放全部<span className="total">（共 {totalCount} 首）</span></span>
        </div>
      </div>
      <List>
        {songs.map((song, index) => (
          <li key={song.id} className="item">
            <span className="order">{index + 1}</span>
            <div className="info">
              <span>{song.name}</span>
              <span className="subTitle">{`${getName(song.ar)} - ${song.al.name}`}</span>
            </div>
          </li>
        ))}
      </List>
    </Container>
  )
})

export default React.memo(SongsList)