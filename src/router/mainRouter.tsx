import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/static/Layout";
import ViewScreen from "../pages/screen/ViewScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import FirstLayout from "../components/static/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import PrivateRoute from "./PrivateRoute";

export const mainRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/auth/register",
    element: <RegisterScreen />,
  },
  {
    path: "/auth/signin",
    element: <SigninScreen />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <ViewScreen />,
      },
    ],
  },
]);
