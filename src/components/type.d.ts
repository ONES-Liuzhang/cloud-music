interface BannerInfo {
  imageUrl: string;
}

interface RecommendInfo {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
}

interface SliderProps {
  bannerList: Array<BannerInfo>;
}

interface RecommendListProps {
  recommendList: Array<RecommendInfo>;
}
