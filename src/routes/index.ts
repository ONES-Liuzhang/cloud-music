import React from "react";
import { Redirect } from "react-router";
import { RouteConfig } from "react-router-config";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Rank from "../application/Rank";
import Singers from "../application/Singers";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => React.createElement(Redirect, { to: "/recommend" }),
      },
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/rank",
        component: Rank,
      },
      {
        path: "/singers",
        component: Singers,
      },
    ],
  },
];

export default routes;
