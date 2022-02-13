import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { SongInfo } from '../../types/business'
import { actionTypes } from './store'
import { PlayList, PlayMode } from './store/constans'

const Player = function Player (props: PropsWithRedux) {

  const {
    playing,
    fullScreen,
    playList,
    enqueue,
    mode,
    currIndex,
    currSong
  } = props

  const { 
    togglePlayingDispatch,
    togglefullScreenDispatch,
    togglePlayListDispatch,
    changeCurrIndexDispatch,
    changeCurrSongDispatch,
    changePlayModeDispatch
  } = props

  return <div>Player</div>
}

const mapStateToProps = (state: any) => ({
  playing: state.getIn('player', 'playing'),
  fullScreen: state.getIn('player', 'fullScreen'),
  playList: state.getIn('player', 'playList'),
  enqueue: state.getIn('player', 'enqueue'),
  mode: state.getIn('player', 'mode'),
  currIndex: state.getIn('player', 'currIndex'),
  currSong: state.getIn('player', 'currSong'),
})

const mapDispatchToProps = (dispatch: any) => ({
  togglePlayingDispatch(data: boolean) {
    dispatch(actionTypes.changePlaying(data))
  },
  togglefullScreenDispatch(data: boolean) {
    dispatch(actionTypes.changeFullScreen(data))
  },
  togglePlayListDispatch(data: PlayList) {
    dispatch(actionTypes.changePlayList(data))
  },
  changeCurrIndexDispatch(data: number) {
    dispatch(actionTypes.changeCurrIndex(data))
  },
  changeCurrSongDispatch(data: SongInfo) {
    dispatch(actionTypes.changeCurrSong(data))
  },
  changePlayModeDispatch(data: PlayMode) {
    dispatch(actionTypes.changePlayMode(data))
  },
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsWithRedux = ConnectedProps<typeof connector>

export default React.memo(Player)

