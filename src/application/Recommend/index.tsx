import React, { useEffect } from "react";
import Slider from "../../components/slider";
import RecommendList from "../../components/recommend-list";
import Scroll from "../../baseUI/scroll";
import Loading from "../../baseUI/loading";
import { Content } from "./style";
import { RecommendProps } from "../type";
import * as actionTypes from "./store/actionCreator";
import { connect } from "react-redux";
import { RecommendState } from "./store/constants";
import { forceCheck } from "react-lazyload";

function Recommend(props: RecommendProps) {
  const { bannerList, recommendList, enterLoading } = props;

  const { getBannerDataDispatch, getRecommendDataDispatch } = props;

  useEffect(() => {
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!recommendList.size) {
      getRecommendDataDispatch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bannerListJs = bannerList.toJS();
  const recommendListJs = recommendList.toJS();

  return (
    <Content>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJs}></Slider>
          <RecommendList recommendList={recommendListJs}></RecommendList>
        </div>
      </Scroll>
      {enterLoading ? <Loading></Loading> : ""}
    </Content>
  );
}

const mapStateToProps = (state: RecommendState) => ({
  bannerList: state.getIn(["recommend", "bannerList"]),
  recommendList: state.getIn(["recommend", "recommendList"]),
  enterLoading: state.getIn(["recommend", "enterLoading"]),
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
