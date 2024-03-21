import { HomePage } from "@/pages/HomePage";
import { SearchPage } from "@/pages/SearchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductPage } from "@/pages/ProductPage";
import { NotFoundPage } from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    index: true
  },
  {
    path: "/staff",
    element: <SearchPage/>,
  },
  {
    path: "/product",
    element: <ProductPage/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);

export const AppRouterProvider = () => {
  return <RouterProvider router={router}/>
}
