import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getRankList, RankList, TracksList } from "./store";
import Loading from "../../baseUI/loading";
import Scroll from "../../baseUI/scroll";
import { Container, List, ListItem, SongList } from "./style";

function Rank(props: PropsFromRedux) {
  const { globalRankList, officialRankList, loading } = props;

  const { getRankListDispatch } = props;

  // TODO: 刷新页面会多次执行渲染，导致的原因？ 怎么优化？
  const globalRankListJs = globalRankList.toJS();
  const officialRankListJs = officialRankList.toJS();

  useEffect(() => {
    getRankListDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSong = (list: TracksList) => {
    return list.length ? (
      <SongList>
        {list.map((item, index) => (
          <li key={`${item.first}-${item.second}`}>
            {index + 1}. {item.first} - {item.second}
          </li>
        ))}
      </SongList>
    ) : null;
  };

  const renderRankList = (list: RankList, global: boolean) => {
    return (
      <List globalRank={global}>
        {list.map((item) => {
          return (
            <ListItem key={item.id} tracks={item.tracks}>
              <div className="img_wrapper">
                <img src={item.coverImgUrl + "?param=300x300"} alt="" />
                <div className="update_frequecy">{item.updateFrequency}</div>
                <div className="decorate"></div>
              </div>
              {renderSong(item.tracks)}
            </ListItem>
          );
        })}
      </List>
    );
  };

  const displyStyle = loading ? { display: "none" } : { display: "" };

  return (
    <Container>
      <Scroll>
        <div>
          <h1 className="title" style={displyStyle}>
            官方榜
          </h1>
          {renderRankList(officialRankListJs, false)}

          <h1 className="title" style={displyStyle}>
            全国榜
          </h1>
          {renderRankList(globalRankListJs, true)}
        </div>
      </Scroll>
      {loading && <Loading></Loading>}
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  globalRankList: state.getIn([
    "rank",
    "globalRankList",
  ]) as ObjWithImmutable<RankList>,
  officialRankList: state.getIn([
    "rank",
    "officialRankList",
  ]) as ObjWithImmutable<RankList>,
  loading: state.getIn(["rank", "loading"]) as boolean,
});

const mapDispatchToProps = (dispatch: any) => ({
  getRankListDispatch() {
    dispatch(getRankList());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(Rank));
