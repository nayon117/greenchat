import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Chat from "../pages/chat/Chat";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Chat />,
      },
    ],
  },
]);

export default myCreatedRoute;
