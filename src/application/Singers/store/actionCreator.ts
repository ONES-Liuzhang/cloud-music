import {
  getSingerListRequest,
  getHotSingerListRequest,
} from "../../../api/request";
import { SingerListRequestParams } from "../../../api/type";
import { SingerInfo, SingerActionsType, SingerStateKeys } from "./constans";
import { fromJS } from "immutable";

const changeSingerList = (data: SingerInfo) => ({
  type: SingerActionsType.CHANGE_SINGER_LIST,
  data: fromJS(data),
});

const changeEnterLoading = (loading: boolean) => ({
  type: SingerActionsType.CHANGE_ENTER_LOADING,
  data: loading,
});

export const changePullDownLoading = (loading: boolean) => ({
  type: SingerActionsType.CHANGE_PULL_DOWN_LOADING,
  data: loading,
});

export const changePullUpLoading = (loading: boolean) => ({
  type: SingerActionsType.CHANGE_PULL_UP_LOADING,
  data: loading,
});

export const changePageNumber = (pageNum: number) => ({
  type: SingerActionsType.CHANGE_PAGE_NUMBER,
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
  return (dispatch: any) => {
    const { category, alpha } = query;
    getSingerListRequest({
      category,
      alpha,
      count: 0,
    }).then(
      (data) => {
        dispatch(changeSingerList(data.artists));
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
