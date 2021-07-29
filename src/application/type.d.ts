import { SingerListRequestParams } from "./../api/type.d";
import { SingerInfo } from "./Singers/store/constans";
import { BannerList, RecommendList } from "./Recommend/store/constants";
import { RouteConfig } from "react-router-config";

export interface HomeProps {
  route?: RouteConfig;
}

export interface RecommendProps {
  bannerList: ObjWithImmutable<BannerList>;
  recommendList: ObjWithImmutable<RecommendList>;
  enterLoading: boolean;
  getBannerDataDispatch: () => void;
  getRecommendDataDispatch: () => void;
}

export interface SingerProps {
  singerList: ObjWithImmutable<Array<SingerInfo>>;
  enterLoading: boolean;
  pullUpLoading: boolean;
  pullDownLoading: boolean;
  pageNumber: number;
  getHotSingerListDispatch: () => void;
  updateDispatch: (category: string, alpha: string) => void;
  pullUpRefreshDispatch: (
    category: string,
    alpha: string,
    hot: boolean,
    count: number
  ) => void;
  pullDownRefreshDispatch: (
    category: string,
    alpha: string,
    hot: boolean
  ) => void;
}
