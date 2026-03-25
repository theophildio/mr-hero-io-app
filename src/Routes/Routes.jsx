import axios from "axios";
import { createBrowserRouter } from "react-router";
import AppDetails from "../components/AppDetails/AppDetails";
import AllApps from "../pages/AllApps/AllApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: async () => {
              const res = await axios.get("/data.json");
              return res.data;
            }
        },
        {
        path: "/apps",
        Component: AllApps,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        }
      },
      {
        path: "/app/appdetails/:id",
        Component: AppDetails,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        }
      }
    ]
  }
]);
