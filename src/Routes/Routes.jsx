import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import AppDetails from "../components/AppDetails/AppDetails";
import AllApps from "../pages/AllApps/AllApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Installation from "../pages/Installation/Installation";
import Root from "../pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
      },
      {
        path: "/apps",
        element: <AllApps />,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
      },
      {
        path: "/apps/appdetails/:id",
        element: <AppDetails />,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
      },
      {
        path: "/installation",
        element: <Installation />,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
