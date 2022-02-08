import {
  getBannerRequest,
  getRecommendListRequest,
} from "../../../api/request";
import { fromJS } from "immutable";
import { BannerList, RecommendList, RecommendActions } from "./constants";
import { Dispatch } from "redux";

export const changeBannerList = (data: BannerList): RecommendActions => ({
  type: "recommend/change_banner",
  data: fromJS(data) as ObjWithImmutable<BannerList>,
});

export const changeRecommendList = (data: RecommendList): RecommendActions => ({
  type: "recommend/change_recommend_list",
  data: fromJS(data) as ObjWithImmutable<RecommendList>,
});

export const changeEnterLoader = (data: boolean): RecommendActions => ({
  type: "recommend/change_loading",
  data: data,
});

export const getBannerList = () => {
  return (dispatch: Dispatch<RecommendActions>) => {
    getBannerRequest().then(
      (data) => {
        dispatch(changeBannerList(data.banners));
      },
      (err) => {
        console.log("[API ERROR] getBannerList 轮播图数据传输错误 ", err);
      }
    );
  };
};

export const getRecommendList = () => {
  return (dispatch: Dispatch<RecommendActions>) => {
    getRecommendListRequest().then((data) => {
      dispatch(changeRecommendList(data.result));
      dispatch(changeEnterLoader(false));
    });
  };
};
