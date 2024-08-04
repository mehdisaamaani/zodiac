import { Outlet } from "react-router";
import { IAppRouteObject } from "../../@types/routs";
import HomePage from "../../pages/homePage";
import PageWrapper from "../../component/layouts/PageWrapper";

const routerHomeDetails = [{ path: "", element: <HomePage /> }];

const homePageRoutes: IAppRouteObject[] = [
  {
    path: "/home",
    element: <Outlet />,
    children: routerHomeDetails.map((route) => ({
      ...route,
      element: <PageWrapper>{route.element}</PageWrapper>,
    })),
  },
];
export default homePageRoutes;
