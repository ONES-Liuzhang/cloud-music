import { SingerList } from "../application/Singers/store/constans";
import { RouteComponentProps } from "react-router-dom";

export interface BannerInfo {
  imageUrl: string;
}

export interface RecommendInfo {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
}

export interface SliderProps {
  bannerList: Array<BannerInfo>;
}

export interface RecommendListProps extends RouteComponentProps {
  recommendList: Array<RecommendInfo>;
}

export interface SingerListProps {
  singerList: SingerList;
}
