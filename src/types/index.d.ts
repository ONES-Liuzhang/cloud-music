import { RouteConfig } from "react-router-config";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R;
  }
}

export type PropsWithRoute<P> = P & {
  route?: RouteConfig | undefined;
};

export type PropsWithClassName<P> = P & {
  className?: string | undefined;
};
