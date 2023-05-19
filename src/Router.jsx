import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Base from "./Components/Base";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        loader: async () => {
          if (localStorage.getItem("uid")) return null;
          else return redirect("/Login");
        },
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
        loader: async () => {
          if (!localStorage.getItem("uid")) return redirect("/login");
          else return null;
        },
        async lazy() {
          let { App } = await import("./App");
          return { Component: App };
        },
      },
      {
        path: "Newac",
        async lazy() {
          let { Newac } = await import("./Components/Newac");
          return { Component: Newac };
        },
      },
      {
        path: "Music",
        async lazy() {
          let { HomeMusic } = await import("./Components/HomeMusic");
          return { Component: HomeMusic };
        },
      },
      {
        path: "*",
        async lazy() {
          let { ErrorPage } = await import("./Components/ErrorPage");
          return { Component: ErrorPage };
        },
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
