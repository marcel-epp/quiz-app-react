import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// site routes
import Home from "./routes/home.jsx";
import Bookmarks from "./routes/bookmarks.jsx";
import CreateBookmarks from "./routes/create-bookmarks.jsx";
import Profile from "./routes/profile.jsx";
import ErrorPage from "./error-page.jsx";
// import css
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
  {
    path: "/createbookmarks",
    element: <CreateBookmarks />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
