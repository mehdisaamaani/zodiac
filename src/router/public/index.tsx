import { Outlet } from "react-router";
import { IAppRouteObject } from "../../@types/routs";
import PageWrapper from "../../component/layouts/PageWrapper";
import { Typography } from "@mui/material";

const publicRouters: IAppRouteObject[] = [
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "/home",
        element: (
          <PageWrapper>
            <Typography>test</Typography>
          </PageWrapper>
        ),
      },
    ],
  },
];

export default publicRouters;
