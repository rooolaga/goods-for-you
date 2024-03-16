import { HomePage } from "@/pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />
}
