import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayouts from "../component/layouts/BaseLayouts";
import AppProvider from "./AppProvider";

const AppRouterProvider = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "",
      element: (
        <BaseLayouts>
          <AppProvider />
        </BaseLayouts>
      ),
    },
  ]);
  return <RouterProvider router={appRoutes} />;
};

export default AppRouterProvider;
