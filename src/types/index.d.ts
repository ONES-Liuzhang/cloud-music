import { RouteConfig } from "react-router-config";
import { RouteComponentProps } from "react-router";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R;
  }
}

export type PropsWithRoute<P, T = unknown> = P & RouteComponentProps<T> & {
  route?: RouteConfig | undefined;
};

export type PropsWithClassName<P> = P & {
  className?: string | undefined;
};
