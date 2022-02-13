import React, { useState, useRef, useEffect, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Container, ImgWrapper, CollectButton, SongListWrapper, BgLayer } from './style'
import Header, { HEADER_HEIGHT } from "../../baseUI/header"
import  {PropsWithRoute } from "../../types"
import SongsList from '../SongsList'
import Scroll from "../../baseUI/scroll"
import * as actionsType from './store/actionCreator'
import { connect, ConnectedProps } from 'react-redux'
import Loading from '../../baseUI/loading'

const OFFSET = 5

const Singer = function Singer(props: PropsWithRoute<PropsWithRedux, {id: number}>) {
  const [showState, setShowState] = useState(true)

  const scrollWrapper = useRef<HTMLElement>()
  // TODO Scroll 里使用 useImperativeHandle，这里的类型先暂时用any，找到方案再说
  const songScroll = useRef<any>()
  const imgWrapper = useRef<HTMLElement>()
  const initialHeight = useRef(0)
  const layerWrapper = useRef<HTMLElement>()
  const btnWrapper = useRef<HTMLElement>()
  const headerWrapper = useRef<HTMLElement>()

  const { artist, hotSongs ,enterLoading } = props
  const { getArtist } = props

  const artistJs = artist.toJS()
  const hotSongsJs = hotSongs.toJS()
  
  // 初始化获取 artist
  useEffect(() => {
    getArtist(props.match.params.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const scrollWrapperEl = scrollWrapper.current
    if(scrollWrapperEl) {
      // 初始化图片高度
      const imgHeight = (initialHeight.current = imgWrapper.current!.offsetHeight)
      layerWrapper.current!.style.top = `${imgHeight - OFFSET}px`
      scrollWrapperEl!.style.top = `${(imgHeight - OFFSET)}px`
      songScroll.current!.refresh()
    }
    
  }, [])

  const setShowStatusFalse = useCallback(() => {
    setShowState(false)
  }, [setShowState])

  // 滚动动画
  const handleScroll = useCallback((pos) => {
    const imgEl = imgWrapper.current as HTMLElement
    const btnEl = btnWrapper.current as HTMLElement
    const layerEl = layerWrapper.current as HTMLElement
    const newY = pos.y
    const minScrollY = OFFSET + HEADER_HEIGHT - initialHeight.current 

    console.log(`minScrollY: ${minScrollY} newY: ${newY}`)

    // 滑动距离占比
    const percent = Math.abs(newY / initialHeight.current) 

    // 处理往下拉的情况，效果：图片放大，按钮跟着偏移
    if (newY > 0) {
      imgEl.style.transform = `scale(${1+percent})`
      layerEl.style.top = `${initialHeight.current + newY - OFFSET}px`
      btnEl.style.transform = `translate3d(0, ${newY}px, 0)`
    } 
    // 往上滑动，但是遮罩还没超过 Header 部分
    else if(newY >= minScrollY) {
      // 恢复
      layerEl.style.zIndex = '50';
      imgEl.style.height = `0px`
      imgEl.style.zIndex = '50'
      imgEl.style.paddingTop = '75%'

      btnEl.style.opacity = `${1 - percent * 2}`
      layerEl.style.top = `${initialHeight.current + newY - OFFSET}px`
      btnEl.style.transform = `translate3d(0, ${newY}px, 0)`
    } 
    // 往上滑动，但是遮罩超过 Header 部分，要固定住
    else {
      layerEl.style.top = `${HEADER_HEIGHT + OFFSET}px`
      layerEl.style.zIndex = '1';
      // 改变图片尺寸，当Header的背景，并且要覆盖scroll
      imgEl.style.height = `${HEADER_HEIGHT}px`
      imgEl.style.zIndex = '99'
      imgEl.style.paddingTop = '0'
    }
  }, [])

  return (
    <CSSTransition 
      in={showState} 
      timeout={300} 
      classNames="fly" 
      appear={true}
      unmountOnExit
      onExited={() => props.history?.goBack()}
    >
      <Container>
        <Header title="专辑" handleClick={setShowStatusFalse} ref={headerWrapper}/>
        <ImgWrapper bgUrl={artistJs.picUrl + "?param=500x500"} ref={imgWrapper}>
          <div className='filter'></div>
        </ImgWrapper>
        <CollectButton ref={btnWrapper}>
          <i className='iconfont'>&#xe62d;</i>
          <span className='text'>收藏</span>
        </CollectButton>
        <BgLayer ref={layerWrapper} />
        {hotSongsJs ? <SongListWrapper ref={scrollWrapper}>
          <Scroll 
            ref={songScroll} 
            onScroll={handleScroll}
          >
            <SongsList songs={hotSongsJs}/>
          </Scroll>
        </SongListWrapper> : null}
        {enterLoading ? <Loading /> : null}
      </Container>
    </CSSTransition>
  )
}

const mapStateToProps = (state: any) => ({
  artist: state.getIn(['singer', 'artist']),
  hotSongs: state.getIn(['singer', 'hotSongs']),
  enterLoading: state.getIn(['singer', 'enterLoading'])
})

const mapDispatchToProps = (dispatch: any) => ({
  getArtist(id: number) {
    dispatch(actionsType.getArtist(id))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsWithRedux = ConnectedProps<typeof connector>

export default connector(React.memo(Singer))