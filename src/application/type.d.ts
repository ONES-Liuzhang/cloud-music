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
