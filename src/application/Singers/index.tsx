import React, { useContext, useEffect, useMemo, useState } from "react";
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
import { forceCheck } from "react-lazyload";
import { CategoryContext } from "./data";

function Singers(props: SingerProps) {
  const { data, dispatch } = useContext(CategoryContext);
  const { category, alpha } = data.toJS();

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
    if (category === val) return;
    dispatch && dispatch({ type: "singers/change_category", data: val });
    updateDispatch(val, alpha);
  };

  const handleAlphaUpdate = (val: string) => {
    if (alpha === val) return;
    dispatch && dispatch({ type: "singers/change_alpha", data: val });
    updateDispatch(category, val);
  };

  // 初始化
  useEffect(() => {
    if (!singerList.size) {
      getHotSingerListDispatch();
    }
  }, []);

  return (
    <SingerContainer>
      <NavContainer>
        <Horizen
          title="分类 (默认热门):"
          list={categoryTypes}
          oldVal={category}
          handleClick={handleCategoryUpdate}
        ></Horizen>
        <Horizen
          title="首字母:"
          list={alphaTypes}
          oldVal={alpha}
          handleClick={handleAlphaUpdate}
        ></Horizen>
      </NavContainer>
      <ScrollContainer>
        <Scroll
          onScroll={forceCheck}
          pullDown={() =>
            pullDownRefreshDispatch(category, alpha, category === "")
          }
          pullUp={() =>
            pullUpRefreshDispatch(
              category,
              alpha,
              category === "",
              pageNumber + 1
            )
          }
          pullDownLoading={pullDownLoading}
          pullUpLoading={pullUpLoading}
        >
          <SingerList singerList={singerListJs}></SingerList>
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
    dispatch(actionTypes.changePageNumber(0));
    dispatch(actionTypes.changeEnterLoading(true));
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
    // TODO 改变页码：api报错是否有影响
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
      dispatch(actionTypes.getHotSingerList());
    } else {
      dispatch(actionTypes.getSingerList({ category, alpha }));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Singers));
