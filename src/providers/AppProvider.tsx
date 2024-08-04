import React from "react";
import { Outlet, useNavigate } from "react-router";
import useAuthentication from "../zustand/useAuth";
import router from "../router";

const AppProvider = () => {
  const navigate = useNavigate();

  const homeRoute = router.getHomeRoute();
  const { isAuthenticated } = useAuthentication();
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate(homeRoute);
    }
  }, [isAuthenticated]);
  return <Outlet />;
};

export default AppProvider;
