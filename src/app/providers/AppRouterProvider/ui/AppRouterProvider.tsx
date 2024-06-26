import { RouterProvider } from "react-router-dom";
import { router } from "../config/router";

export const AppRouterProvider = () => {
  return <RouterProvider router={router}/>
}
