import React from "react";
import ReactDOM from "react-dom/client";
import MuroPost from "./MuroPost";
import AddPost from "./AddPost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MuroPost />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/agregar",
    element: <AddPost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
