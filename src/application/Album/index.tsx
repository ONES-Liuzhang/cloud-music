import React, { useEffect, useRef, useState } from "react";
import { Container, TopDesc, Menu, SongList, SongListItem } from "./style";
import { CSSTransition } from "react-transition-group";
import { RouteComponentProps } from "react-router";
import Header, {HEADER_HEIGHT} from "../../baseUI/header";
import Scroll from "../../baseUI/scroll";
import { getAlbumCreatorName, getCount, isEmptyObj } from "../../api/utils";
import { ScrollPosition } from "../../baseUI/type";
import globalStyle from "../../assets/global-style";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/reducer";
import { actionCreator as actionTypes } from "./store";
import { AlbumData } from "./store/constants";
import Loading from "../../baseUI/loading"

type AlbumProps = RouteComponentProps<{id: string}>
  & PropsFromRedux

// TODO 代码拆解优化
function Album(props: AlbumProps) {
  const [showStatus, setShowStatus] = useState(true);
  const headerRef = useRef<HTMLDivElement | undefined>();
  const [title, setTitle] = useState("歌单")
  const [isMarquee, setMarquee] = useState(false);

  const id = props.match.params.id
  const { currentAlbum, enterLoading } = props
  const { getCurrentAlbum } = props

  const handleClickBack = () => {
    setShowStatus(false);
  };

  const currentAlbumJs = currentAlbum.toJS()

  useEffect(() => {
    getCurrentAlbum(id)
  }, [getCurrentAlbum, id])

  const handleScroll = (pos: ScrollPosition) => {
      let minScrollY = -(HEADER_HEIGHT + 5)
      let headerDom = (headerRef.current) as HTMLElement
      let percent = Math.abs(pos.y / minScrollY)
      if(pos.y < minScrollY) {
        headerDom.style.backgroundColor = globalStyle['theme-color']
        headerDom.style.opacity = Math.min((percent - 1) / 2, 1) + ''
        setTitle(currentAlbumJs.name)
        setMarquee(true)
      } else {
        headerDom.style.backgroundColor = ''
        headerDom.style.opacity = '1'
        setTitle("歌单")
        setMarquee(false)
      }
  };

  const renderSongList = (list: any) => {
    return (
      <SongList>
        <div className="first_line">
          <div className="play_all">
            <i className="iconfont">&#xe6e3;</i>
            <span>
              播放全部
              <span className="sum">{`(共${list.length}首)`}</span>
            </span>
          </div>
          <div className="add_list">
            <i className="iconfont">&#xe62d;</i>
            <span>
              &nbsp;收 藏<span>({getCount(currentAlbumJs.subscribedCount)})</span>
            </span>
          </div>
        </div>
        {list.map((item: any, index: number) => (
          <SongListItem key={index}>
            <div className="order">
              <span>{index + 1}</span>
            </div>
            <div className="main">
              <div className="title">{item.name}</div>
              <div className="name">
                {getAlbumCreatorName(item.ar)} - {item.al?.name}
              </div>
            </div>
          </SongListItem>
        ))}
      </SongList>
    );
  };

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      unmountOnExit
      appear={true}
      onExited={props.history.goBack}
    >
      <Container>
        {enterLoading ? <Loading /> : null}
        <Header
          ref={headerRef}
          title={title}
          handleClick={handleClickBack}
          isMarquee={isMarquee}
        />
        {!isEmptyObj(currentAlbumJs) ? <Scroll onScroll={handleScroll}>
          <div>
            <TopDesc background={currentAlbumJs.coverImgUrl}>
              <div className="background">
                <div className="filter"></div>
              </div>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img
                  src={currentAlbumJs.coverImgUrl + "?param=300x300"}
                  height="100%"
                  width="100%"
                  alt=""
                />
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span>{getCount(currentAlbumJs.subscribedCount)}</span>
                </div>
              </div>
              <div className="desc_wrapper">
                <div className="title">{currentAlbumJs.name}</div>
                <div className="person">
                  <div className="avatar">
                    <img
                      src={currentAlbumJs.creator.avatarUrl + "?param=30x30"}
                      alt=""
                    />
                  </div>
                  <div className="name">{currentAlbumJs.creator.nickname}</div>
                </div>
              </div>
            </TopDesc>
            <Menu>
              <div>
                <i className="iconfont">&#xe6ad;</i>
                评论
              </div>
              <div>
                <i className="iconfont">&#xe86f;</i>
                点赞
              </div>
              <div>
                <i className="iconfont">&#xe62d;</i>
                收藏
              </div>
              <div>
                <i className="iconfont">&#xe606;</i>更多
              </div>
            </Menu>
            {renderSongList(currentAlbumJs.tracks)}
          </div>
        </Scroll> : null}
      </Container>
    </CSSTransition>
  );
}

const mapStateToProps = (state: RootState) => ({
  currentAlbum: state.getIn(['album', 'currentAlbum']) as ObjWithImmutable<AlbumData>,
  enterLoading: state.getIn(['album', 'enterLoading']) as boolean
})

const mapDispatchToProps = (dispatch: any) => ({
  getCurrentAlbum(id: string) {
    dispatch(actionTypes.getAlbumDetail(id))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(Album));
