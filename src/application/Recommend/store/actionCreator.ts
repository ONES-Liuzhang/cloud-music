import {
  getBannerRequest,
  getRecommendListRequest,
} from "../../../api/request";
import { fromJS } from "immutable";
import { RecommendActionsType, BannerList, RecommendList } from "./constants";

export const changeBannerList = (data: BannerList) => ({
  type: RecommendActionsType.CHANGE_BANNER_LIST,
  data: fromJS(data),
});

export const changeRecommendList = (data: RecommendList) => ({
  type: RecommendActionsType.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
});

export const changeEnterLoader = (data: boolean) => ({
  type: RecommendActionsType.CHANGE_ENTER_LOADING,
  data: data,
});

export const getBannerList = () => {
  return (dispatch: any) => {
    getBannerRequest().then(
      (data) => {
        dispatch(changeBannerList(data.banners));
      },
      (err) => {
        console.log("轮播图数据传输错误 ", err);
      }
    );
  };
};

export const getRecommendList = () => {
  return (dispatch: any) => {
    getRecommendListRequest().then((data) => {
      dispatch(changeRecommendList(data.result));
      dispatch(changeEnterLoader(false));
    });
  };
};
