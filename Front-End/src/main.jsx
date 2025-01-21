import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllUsers from "./components/AllUsers.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./components/AddUser.jsx";
import UpdateUSer from "./components/UpdateUSer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AllUsers /> },
      { path: "/createuser", element: <AddUser /> },
      { path: "/updateuser/:id", element: <UpdateUSer /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
