import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./Components/Base";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        async lazy() {
          let { Home } = await import("./Components/Home");
          return { Component: Home };
        },
      },
      {
        path: "Login",
        async lazy() {
          let { Login } = await import("./Components/Login");
          return { Component: Login };
        },
      },
      {
        path: "afterlogin",
        async lazy() {
          let { AfterLogin } = await import("./Components/AfterLogin");
          return { Component: AfterLogin };
        },
      },
      {
        path: "Newac",
        async lazy() {
          let { Newac } = await import("./Components/Newac");
          return { Component:Newac };
        },
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
