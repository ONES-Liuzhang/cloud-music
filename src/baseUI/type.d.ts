import { ReactNode } from "react";
type Direction = "horizental" | "vertical";

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface ScrollProps {
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
  children?: ReactNode;
}

export interface HorizenProps<T = any> {
  list: Array<T>;
  title: string;
  oldVal: string;
  handleClick?: (key?: any) => void;
}
