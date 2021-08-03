import React, { forwardRef } from "react";

interface ScrollProps {
  direction?: "horizental" | "vertical";
  click?: boolean;
  refresh?: boolean;
  onScroll?: null | ((pos?: { x: string; y: string }) => void);
  pullUp?: null | ((pos?: { x: string; y: string }) => void);
  pullDown?:
    | null
    | ((pos?: { x: string; y: string }, duration?: number) => void);
  pullUpLoading?: boolean;
  pullDownLoading?: boolean;
  bounceTop?: boolean;
  bounceDown?: boolean;
  // 如果加上children属性，报错是会消失的  Q: 为什么forwardRef内扩展了props，还需要手动定义children
}

const Scroll = forwardRef<HTMLDivElement, ScrollProps>((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});

// 调用
function Recommend() {
  return (
    // 报错：类型“{ children: Element; }”与类型“IntrinsicAttributes & ScrollProps & RefAttributes<HTMLElement>”不具有相同的属性。
    <Scroll>
      <div></div>
    </Scroll>
  );
}
