import {
  getBannerRequest,
  getRecommendListRequest,
} from "../../../api/request";
import { fromJS } from "immutable";
import { BannerList, RecommendList, RecommendActions } from "./constants";

interface ActionCreators {
  (data: any): RecommendActions;
}

export const changeBannerList: ActionCreators = (data: BannerList) => ({
  type: "recommend/change_banner",
  data: fromJS(data) as ObjWithImmutable<BannerList>,
});

export const changeRecommendList: ActionCreators = (data: RecommendList) => ({
  type: "recommend/change_recommend_list",
  data: fromJS(data) as ObjWithImmutable<RecommendList>,
});

export const changeEnterLoader: ActionCreators = (data: boolean) => ({
  type: "recommend/change_loading",
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
