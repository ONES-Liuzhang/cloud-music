import { SingerList } from "../application/Singers/store/constans";

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

export interface RecommendListProps {
  recommendList: Array<RecommendInfo>;
}

export interface SingerListProps {
  singerList: SingerList;
}
