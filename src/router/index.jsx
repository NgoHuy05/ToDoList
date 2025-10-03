import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Calendar from "../pages/Calendar";
import StickyWall from "../pages/StickyWall";
import Setting from "../pages/Setting";
import Document from "../pages/Document";
import Upcoming from "../pages/Tasks/Upcoming";
import Today from "../pages/Tasks/Today";
import Tasks from "../pages/Tasks/Tasks";
import Personal from "../pages/Tasks/Personal";
import Work from "../pages/Tasks/Work";
import AllTasks from "../pages/Tasks/AllTasks";
import Others from "../pages/Tasks/Others";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks",
        element: <Tasks />,
        children: [
          {
            path: "upcoming",
            element: <Upcoming />,
          },
          {
            path: "today",
            element: <Today />,
          },
          {
            path: "all-tasks",
            element: <AllTasks />,
          },
          {
            path: "personal",
            element: <Personal />,
          },
          {
            path: "work",
            element: <Work />,
          },

          {
            path: "others",
            element: <Others />,
          },
        ],
      },

      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "stickywall",
        element: <StickyWall />,
      },

      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "docs",
    element: <Document />,
  },
]);
