import React, { useRef, useState } from "react";
import { Container, TopDesc, Menu, SongList, SongListItem } from "./style";
import { CSSTransition } from "react-transition-group";
import { RouteComponentProps } from "react-router";
import Header from "../../baseUI/header";
import Scroll from "../../baseUI/scroll";
import { getAlbumCreatorName, getCount } from "../../api/utils";
import { ScrollPosition } from "../../baseUI/type";

function Album(props: RouteComponentProps) {
  const [showStatus, setShowStatus] = useState(true);
  const headerRef = useRef<HTMLDivElement | undefined>();
  const [isMarquee, setMarquee] = useState(false);
  const handleClickBack = () => {
    setShowStatus(false);
  };

  //mock 数据
  const currentAlbum = {
    creator: {
      avatarUrl:
        "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
      nickname: "浪里推舟",
    },
    coverImgUrl:
      "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
    subscribedCount: 2010711,
    name: "听完就睡，耳机是天黑以后柔软的梦境",
    tracks: [
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热",
        },
      },
    ],
  };

  const handleScroll = (pos: ScrollPosition) => {};

  // TODO
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
              &nbsp;收 藏<span>({getCount(currentAlbum.subscribedCount)})</span>
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
        <Header
          ref={headerRef}
          title={"返回"}
          handleClick={handleClickBack}
          isMarquee={isMarquee}
        />
        <Scroll>
          <div>
            <TopDesc background={currentAlbum.coverImgUrl}>
              <div className="background">
                <div className="filter"></div>
              </div>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img
                  src={currentAlbum.coverImgUrl + "?param=300x300"}
                  height="100%"
                  width="100%"
                  alt=""
                />
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span>{getCount(currentAlbum.subscribedCount)}</span>
                </div>
              </div>
              <div className="desc_wrapper">
                <div className="title">{currentAlbum.name}</div>
                <div className="person">
                  <div className="avatar">
                    <img
                      src={currentAlbum.creator.avatarUrl + "?param=30x30"}
                      alt=""
                    />
                  </div>
                  <div className="name">{currentAlbum.creator.nickname}</div>
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
            {renderSongList(currentAlbum.tracks)}
          </div>
        </Scroll>
      </Container>
    </CSSTransition>
  );
}

export default React.memo(Album);
