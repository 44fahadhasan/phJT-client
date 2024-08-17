import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import RegisterPage from "../pages/RegisterPage";
import RootLayoutForAuthenticatedPages from "../pages/RootLayoutForAuthenticatedPages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Products",
        element: <ProductsPage />,
      },
      {
        path: "Products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "Category/:categoryName",
        element: <CategoryPage />,
      },
    ],
  },

  // authenticated pages
  {
    path: "Login",
    element: <RootLayoutForAuthenticatedPages />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "Register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default routes;
