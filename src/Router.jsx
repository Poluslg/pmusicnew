import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Base from "./Components/Base";

const router = createBrowserRouter([
  {
    path: "home",
    element: <Base />,
    children: [
      {
        path: "afterlogin",
        loader: async () => {
          if (!localStorage.getItem("uid")) return redirect("/login");
          else return null;
        },
        async lazy() {
          let { AfterLogin } = await import("./Components/AfterLogin");
          return { Component: AfterLogin };
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
  {
    path: "Login",
    async lazy() {
      let { Login } = await import("./Components/Login");
      return { Component: Login };
    },
  },
  {
    path: '/',
    async lazy() {
      let { Home } = await import("./Components/Home");
      return { Component: Home };
    },
  },
  {
    path: "*",
    async lazy() {
      let { ErrorPage } = await import("./Components/ErrorPage");
      return { Component: ErrorPage };
    },
  },
  {
    path: "Newac",
    async lazy() {
      let { Newac } = await import("./Components/Newac");
      return { Component: Newac };
    },
  },
  // {
  //   path: "NewAccount",
  //   async lazy() {
  //     let { NewAccount } = await import("./Components/NewAccount");
  //     return { Component: NewAccount };
  //   },
  // },
  {
    path: "forgotPassword",
    async lazy() {
      let { Forgotpassword } = await import("./Components/Forgotpassword");
      return { Component: Forgotpassword };
    },
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
