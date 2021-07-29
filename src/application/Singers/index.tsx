import React, { useEffect, useState } from "react";
import Horizen from "../../baseUI/horizen-item";
import SingerList from "../../components/singer-list";
import Scroll from "../../baseUI/scroll";
import { NavContainer, SingerContainer, ScrollContainer } from "./style";
import { categoryTypes, alphaTypes } from "../../api/config";
import { connect } from "react-redux";
import { SingerProps } from "../type";
import * as actionTypes from "./store/actionCreator";
import { SingerStateKeys } from "./store/constans";
import Loading from "../../baseUI/loading";

function Singers(props: SingerProps) {
  const [category, setCategory] = useState("");
  const [alpha, setAlpha] = useState("");
  const [hot, setHot] = useState(true);

  const {
    singerList,
    enterLoading,
    pullDownLoading,
    pullUpLoading,
    pageNumber,
    getHotSingerListDispatch,
    updateDispatch,
    pullDownRefreshDispatch,
    pullUpRefreshDispatch,
  } = props;

  const singerListJs = singerList.toJS();

  const handleCategoryUpdate = (val: string) => {
    setCategory(val);
    updateDispatch(category, val);
  };

  const handleAlphaUpdate = (val: string) => {
    setAlpha(val);
    updateDispatch(val, alpha);
  };

  useEffect(() => {
    if (!singerList.size) {
      getHotSingerListDispatch();
    }
  }, []);

  useEffect(() => {
    setHot(true);
    updateDispatch(category, alpha);
  }, [category, alpha]);

  return (
    <SingerContainer>
      <NavContainer>
        <Horizen
          title="分类 (默认热门):"
          list={categoryTypes}
          oldVal={category}
          handleClick={(val) => handleCategoryUpdate(val)}
        ></Horizen>
        <Horizen
          title="首字母:"
          list={alphaTypes}
          oldVal={alpha}
          handleClick={(val) => handleAlphaUpdate(val)}
        ></Horizen>
      </NavContainer>
      <ScrollContainer>
        <Scroll
          pullDown={() => pullDownRefreshDispatch(category, alpha, hot)}
          pullUp={() =>
            pullUpRefreshDispatch(category, alpha, hot, pageNumber + 1)
          }
        >
          <div>
            {pullDownLoading && <span>加载中...</span>}
            <SingerList singerList={singerListJs}></SingerList>
            {pullUpLoading && <span>加载中...</span>}
          </div>
        </Scroll>
      </ScrollContainer>
      {enterLoading && <Loading></Loading>}
    </SingerContainer>
  );
}

const mapStateToProps = (state: any) => ({
  singerList: state.getIn(["singers", SingerStateKeys.SINGER_LIST]),
  enterLoading: state.getIn(["singers", SingerStateKeys.ENTER_LOADING]),
  pullUpLoading: state.getIn(["singers", SingerStateKeys.PULL_UP_LOADING]),
  pullDownLoading: state.getIn(["singers", SingerStateKeys.PULL_DOWN_LOADING]),
  pageNumber: state.getIn(["singers", SingerStateKeys.PAGE_NUMBER]),
});

const mapDispatchToProps = (dispatch: any) => ({
  getHotSingerListDispatch() {
    dispatch(actionTypes.getHotSingerList());
  },
  updateDispatch(category: string, alpha: string) {
    dispatch(actionTypes.getSingerList({ category, alpha }));
    dispatch(actionTypes.getSingerList({ category, alpha }));
  },
  /** 上拉加载 */
  pullUpRefreshDispatch(
    category: string,
    alpha: string,
    hot: boolean,
    count: number
  ) {
    dispatch(actionTypes.changePullUpLoading(true));
    dispatch(actionTypes.changePageNumber(count + 1));
    if (hot) {
      dispatch(actionTypes.refreshMoreHotSingerList());
    } else {
      dispatch(actionTypes.refreshMoreSingerList({ category, alpha }));
    }
  },
  /** 下拉更新 */
  pullDownRefreshDispatch(category: string, alpha: string, hot: boolean) {
    dispatch(actionTypes.changePullDownLoading(true));
    dispatch(actionTypes.changePageNumber(0));
    if (hot) {
      dispatch(actionTypes.refreshMoreHotSingerList());
    } else {
      dispatch(actionTypes.refreshMoreSingerList({ category, alpha }));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Singers));
