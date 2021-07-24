import { RouteConfig } from "react-router-config";

export type PropsWithRoute<P> = P & {
  route: RouteConfig;
};
