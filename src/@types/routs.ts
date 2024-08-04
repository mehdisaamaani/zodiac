import { RouteObject } from "react-router-dom";

interface IAppRouteObject extends Omit<RouteObject, "children"> {
  path: string;
  element: React.ReactNode;
  children?: IAppRouteObject[];
}

type TRouterPathGetter = {
  [key: `get${string}Path`]: (...args: string[]) => string;
};

export type { IAppRouteObject, TRouterPathGetter };
