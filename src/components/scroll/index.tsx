import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  ReactElement,
} from "react";
import BetterScroll from "better-scroll";
import { ScrollContainer } from "./style";
import { ScrollProps, ScrollPosition } from "../type";
/**
 * Scroll.propTypes = {
 *  direction: propTypes.oneOf(['vertical', 'horizental']),  // 滚动方向
 *  click: propTypes.bool, // 是否支持点击
 *  refresh: propTypes.bool, // 是否支持刷新
 *  onScroll: propTypes.func, // 滚动事件
 *  pullUp: propTypes.func,   // 上拉加载逻辑
 *  pullDown: propTypes.func, // 下拉加载逻辑
 *  pullUpLoading: propTypes.bool, // 是否显示上拉 loading 动画
 *  pullDownLoading: propTypes.bool, // 是否显示下拉 loading 动画
 *  bounceTop: propTypes.bool, // 是否支持向上吸顶
 *  bounceDown: propTypes.bool, // 是否支持下拉吸底
 * }
 */

const Scroll = forwardRef<ReactElement, ScrollProps>((props, ref) => {
  const [bScroll, setBScroll] = useState<null | BetterScroll>();
  const scrollContainerRef = useRef<undefined | HTMLElement>();

  const {
    direction,
    click,
    refresh,
    bounceDown,
    bounceTop,
    pullDownLoading,
    pullUpLoading,
    children,
  } = props;
  const { onScroll, pullDown, pullUp } = props;

  // 初始化
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scroll = new BetterScroll(scrollContainerRef.current, {
        scrollX: direction === "horizental",
        scrollY: direction === "vertical",
        click: click,
        probeType: 3,
        bounce: {
          top: bounceTop,
          bottom: bounceDown,
        },
      });
      setBScroll(scroll);
      return () => {
        setBScroll(null);
      };
    }
  }, []);

  // 每次渲染都刷新实例，防止滚动失效
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  // 绑定scroll事件
  useEffect(() => {
    if (onScroll && bScroll) {
      bScroll.on("scroll", (position: ScrollPosition) => {
        onScroll(position);
      });
      return () => {
        bScroll.off("scroll");
      };
    }
  }, [onScroll, bScroll]);

  // 进行下拉到顶的判断，松手的时候进行判断
  useEffect(() => {
    if (pullDown && bScroll) {
      bScroll.on("touchEnd", (pos: ScrollPosition) => {
        if (pos.y > 50) {
          pullDown();
        }
      });
      return () => {
        bScroll.off("touchEnd");
      };
    }
  }, [pullDown, bScroll]);

  // 进行上拉到底的判断
  useEffect(() => {
    if (pullUp && bScroll) {
      // 滚动结束时
      bScroll.on("scrollEnd", () => {
        if (bScroll.y <= bScroll.maxScrollY + 100) {
          pullUp();
        }
      });
      return () => {
        bScroll.off("scrollEnd");
      };
    }
  }, [pullUp, bScroll]);

  // TODO 类型问题
  useImperativeHandle<any, any>(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
      }
    },
    getBScroll() {
      if (bScroll) return bScroll;
    },
  }));

  // props.children 类似Vue中的$slot
  return <ScrollContainer ref={scrollContainerRef}>{children}</ScrollContainer>;
});

Scroll.defaultProps = {
  direction: "horizental",
  click: true,
  refresh: true,
  onScroll: null,
  pullUp: null,
  pullDown: null,
  pullUpLoading: false,
  pullDownLoading: false,
  bounceTop: true,
  bounceDown: true,
};
export default React.memo(Scroll);
