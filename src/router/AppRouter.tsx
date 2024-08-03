import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Details } from "../pages/Details";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details:id",
    element: <Details />,
  },
]);
