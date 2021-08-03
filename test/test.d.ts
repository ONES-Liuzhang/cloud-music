import {
  ForwardedRef,
  ReactElement,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  ReactNode,
} from "react";
// 相关type -> 提取自React源码
declare namespace React {
  function forwardRef<T, P = {}>(
    render: ForwardRefRenderFunction<T, P>
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}

type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

// forwardRef 内部使用PropsWithChildren<P> 扩展了 ScrollProps
interface ForwardRefRenderFunction<T, P = {}> {
  (props: PropsWithChildren<P>, ref: ForwardedRef<T>): ReactElement | null;
  displayName?: string | undefined;
  // explicit rejected with `never` required due to
  // https://github.com/microsoft/TypeScript/issues/36826
  /**
   * defaultProps are not supported on render functions
   */
  defaultProps?: never | undefined;
  /**
   * propTypes are not supported on render functions
   */
  propTypes?: never | undefined;
}
