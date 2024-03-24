import { HomePage } from "@/pages/HomePage";
import { SearchPage } from "@/pages/SearchPage";
import { ProductPage } from "@/pages/ProductPage";
import { NotFoundPage } from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
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
    path: "/product/:id",
    element: <ProductPage />
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);
