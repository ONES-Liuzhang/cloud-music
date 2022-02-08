import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Top, Tab, TabItem } from "./style";
import { NavLink } from "react-router-dom";

interface HomeProps {
  route?: RouteConfig;
}

function Home(props: HomeProps) {
  const { route } = props;
  return (
    <div className="home">
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">网 抑 云</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to={"/recommend"} activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to={"/singers"} activeClassName="selected">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to={"/rank"} activeClassName="selected">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route?.routes)}
    </div>
  );
}

export default React.memo(Home);
