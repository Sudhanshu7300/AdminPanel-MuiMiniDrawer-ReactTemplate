// React import
import { Outlet, useRouteError } from "react-router-dom";
//React Icons
//Main Module
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";
import Unauthorized from "./component/Unauthorized";
//Auth Component
import SignIn from "./views/SignIn/Signin";
// core component
import Home from "./views/Home/Home";
const RootErrorBoundary = () => {
  let error = useRouteError();
  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  );
};

export const routes = [
  {
    element: <AuthLayout />,
    children: [
      { path: "/auth/signIn", element: <SignIn /> },
      { path: "*", element: <Unauthorized /> },
      {
        path: "",
        element: <Outlet />,
        errorElement: <RootErrorBoundary />,
        children: [],
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        invisible: false,
        name: "Demo",
        path: "/dashboard",
        element: <Home />,
      },
    ],
  },
];
