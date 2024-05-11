import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Chat from "../pages/chat/Chat";
import CreateCharacters from "../pages/createCharacters/CreateCharacters";
import GenerateImage from "../pages/generateImage/GenerateImage";
import MyCharacter from "../pages/myCharacter/MyCharacter";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Chat />,
      },
      {
        path: "/characters",
        element: <MyCharacter />,
      },
      {
        path: "/generate-image",
        element: <GenerateImage />,
      },
      {
        path: "/create-character",
        element: <CreateCharacters />,
      },
    ],
  },
]);

export default myCreatedRoute;
