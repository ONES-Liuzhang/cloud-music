import { RouteConfig } from "react-router-config";

export type PropsWithRoute<P> = P & {
  route?: RouteConfig | undefined;
};

export type PropsWithClassName<P> = P & {
  className?: string | undefined;
};
