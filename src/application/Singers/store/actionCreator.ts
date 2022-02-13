import {
  getSingerListRequest,
  getHotSingerListRequest,
} from "../../../api/request";
import { SingerListRequestParams } from "../../../api/type";
import {
  SingerInfo,
  SingerStateKeys,
  SingerActions,
  SingerList,
} from "./constans";
import { fromJS } from "immutable";

interface ActionCreators {
  (data: any): SingerActions;
}

const changeSingerList: ActionCreators = (data: SingerInfo) => ({
  type: "singers/change_singer_list",
  data: fromJS(data),
});

export const changeEnterLoading: ActionCreators = (loading: boolean) => ({
  type: "singers/change_loading",
  data: loading,
});

export const changePullDownLoading: ActionCreators = (loading: boolean) => ({
  type: "singers/change_pull_down_loading",
  data: loading,
});

export const changePullUpLoading: ActionCreators = (loading: boolean) => ({
  type: "singers/change_pull_up_loading",
  data: loading,
});

export const changePageNumber: ActionCreators = (pageNum: number) => ({
  type: "singers/change_page_number",
  data: pageNum,
});

/** 首次加载热门歌手 */
export const getHotSingerList = () => {
  return (dispatch: any) => {
    getHotSingerListRequest(0).then(
      (data) => {
        dispatch(changeSingerList(data.artists));
        dispatch(changeEnterLoading(false));
        dispatch(changePullDownLoading(false));
      },
      (err) => {
        dispatch(changeEnterLoading(false));
        console.log("热门歌手列表获取失败！", err);
      }
    );
  };
};

/** 获取更多热门歌手 */
export const refreshMoreHotSingerList = () => {
  return (dispatch: any, getState: any) => {
    const singerList = getState()
      .getIn(["singers", SingerStateKeys.SINGER_LIST])
      .toJS();
    const pageNumber = getState().getIn([
      "singers",
      SingerStateKeys.PAGE_NUMBER,
    ]);
    getHotSingerListRequest(pageNumber).then(
      (data) => {
        dispatch(changeSingerList(singerList.concat(data.artists)));
        dispatch(changePullUpLoading(false));
      },
      (err) => {
        console.log("热门歌手列表获取失败！", err);
      }
    );
  };
};

/** 第一次获取条件加载歌手 */
export const getSingerList = (query: SingerListRequestParams) => {
  return (dispatch: any, getState: any) => {
    const { category, alpha } = query;
    getSingerListRequest({
      category,
      alpha,
      count: 0,
    }).then(
      (data) => {
        dispatch(changeSingerList(data.artists));
        const singerList = getState()
          .getIn(["singers", SingerStateKeys.SINGER_LIST])
          .toJS();
        console.log(singerList)
        dispatch(changeEnterLoading(false));
        dispatch(changePullDownLoading(false));
      },
      (err) => {
        console.log("歌手列表获取失败！", err);
      }
    );
  };
};

export const refreshMoreSingerList = (query: SingerListRequestParams) => {
  return (dispatch: any, getState: any) => {
    const singerList = getState()
      .getIn(["singers", SingerStateKeys.SINGER_LIST])
      .toJS();
    const pageNumber = getState().getIn([
      "singers",
      SingerStateKeys.PAGE_NUMBER,
    ]);
    const { category, alpha } = query;
    getSingerListRequest({
      category,
      alpha,
      count: pageNumber,
    }).then(
      (data) => {
        dispatch(changeSingerList(singerList.concat(data.artists)));
        dispatch(changePullUpLoading(false));
      },
      (err) => {
        console.log("歌手列表获取失败！", err);
      }
    );
  };
};
