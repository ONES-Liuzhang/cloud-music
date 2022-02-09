import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  ReactElement,
} from "react";
import BetterScroll from "better-scroll";
import { ScrollContainer, PullDownLoading, PullUpLoading } from "./style";
import { ScrollProps, ScrollPosition } from "../type";
import Loading from "../loading";
import LoadingV2 from "../loading-v2";
import useDebounce from "../../hooks/useDebounce";

// Scroll.propTypes = {
//   direction: PropTypes.oneOf(["vertical", "horizental"]), // 滚动方向
//   click: PropTypes.bool, // 是否支持点击
//   refresh: PropTypes.bool, // 是否支持刷新
//   onScroll: PropTypes.func, // 滚动事件
//   pullUp: PropTypes.func, // 上拉加载逻辑
//   pullDown: PropTypes.func, // 下拉加载逻辑
//   pullUpLoading: PropTypes.bool, // 是否显示上拉 loading 动画
//   pullDownLoading: PropTypes.bool, // 是否显示下拉 loading 动画
//   bounceTop: PropTypes.bool, // 是否支持向上吸顶
//   bounceDown: PropTypes.bool, // 是否支持下拉吸底
// };

const Scroll = forwardRef<ReactElement, ScrollProps>((props, ref) => {
  const [bScroll, setBScroll] = useState<null | BetterScroll>();
  const scrollContainerRef = useRef<null | HTMLDivElement>();

  const {
    direction,
    click,
    refresh,
    bounceDown,
    bounceTop,
    pullDownLoading, // 外部传入
    pullUpLoading,
  } = props;
  const { onScroll, pullDown, pullUp } = props;

  const pullDownLoadingStyle = pullDownLoading
    ? { display: "" }
    : { display: "none" };
  const pullUpLoadingStyle = pullUpLoading
    ? { display: "" }
    : { display: "none" };

  // useMemo 会在渲染期间执行，不涉及渲染的要在useEffect中，把它当成性能优化
  // useMemo(() => {
  //   return debounce(pullDown)
  // }, [pullDown])
  const debounce = useDebounce();

  // 初始化
  useEffect(() => {
    const scroll = new BetterScroll(
      scrollContainerRef.current as HTMLDivElement,
      {
        scrollX: direction === "horizental",
        scrollY: direction === "vertical",
        click: click,
        probeType: 3,
        bounce: {
          top: bounceTop,
          bottom: bounceDown,
        },
      },
    );
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    //eslint-disable-next-line
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
          debounce(() => {
            pullDown();
          });
        }
      });
      return () => {
        bScroll.off("touchEnd");
      };
    }
  }, [pullDown, bScroll, debounce]);

  // 进行上拉到底的判断
  useEffect(() => {
    if (pullUp && bScroll) {
      // 滚动结束时
      bScroll.on("scrollEnd", () => {
        console.log(bScroll.y, bScroll.maxScrollY)
        if (bScroll.y <= bScroll.maxScrollY + 100) {
          debounce(() => {
            pullUp();
          });
        }
      });
      return () => {
        bScroll.off("scrollEnd");
      };
    }
  }, [pullUp, bScroll, debounce]);

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
  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
      {/* 滑动到底部 显示loading */}
      <PullUpLoading style={pullUpLoadingStyle}>
        <Loading></Loading>
      </PullUpLoading>
      {/* 滑动到顶部 显示加载中 */}
      <PullDownLoading style={pullDownLoadingStyle}>
        <LoadingV2></LoadingV2>
      </PullDownLoading>
    </ScrollContainer>
  );
});

Scroll.defaultProps = {
  direction: "vertical",
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
