import React from "react";
import { List, ListWapper, ListItem } from "./style";
import { getCount } from "../../api/utils";
import { RecommendListProps } from "../type";
import LazyLoad from "react-lazyload";

function RecommendList(props: RecommendListProps) {
  const { recommendList } = props;
  return (
    <ListWapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {recommendList.map((item) => {
          return (
            <ListItem key={item.id}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <LazyLoad
                  placeholder={
                    <img
                      src={require("./music.png").default}
                      alt="music"
                      height="100%"
                      width="100%"
                    />
                  }
                >
                  <img src={item.picUrl + "?param=300x300"} alt="music"></img>
                </LazyLoad>
                <div className="play_count">
                  <i>
                    <span className="icon iconfont">&#xe885;</span>
                    <span className="count">{getCount(item.playCount)}</span>
                  </i>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWapper>
  );
}

export default React.memo<RecommendListProps>(RecommendList);
