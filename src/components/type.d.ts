import { ReactElement } from "react";
export interface PropsWithClassName {
  className?: string | undefined;
}

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

type Direction = "horizental" | "vertical";

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface ScrollProps extends PropsWithClassName {
  direction?: Direction;
  click?: boolean;
  refresh?: boolean;
  onScroll?: null | ((pos?: ScrollPosition) => void);
  pullUp?: null | ((pos?: ScrollPosition) => void);
  pullDown?: null | ((pos?: ScrollPosition, duration?: number) => void);
  pullUpLoading?: boolean;
  pullDownLoading?: boolean;
  bounceTop?: boolean;
  bounceDown?: boolean;
  children?: ReactElement;
}
