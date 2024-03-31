import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chats from "./pages/Chats";
import LoginPage from "./pages/LoginPage";
import ChatRoom from "./pages/ChatRoom";
import { CssBaseline } from "@mui/material";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Chats />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/chat-room/:id",
    element: <ChatRoom />,
  },
]);

const App = () => {
  return (
    <>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
