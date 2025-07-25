import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/LanderPage.tsx"
import Blogs from "./pages/BlogsPage.tsx"
import NotFoundPage from "./pages/404Page.tsx";
import Blog from "./pages/BlogPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/blogs",
    element: <Blogs/>
  },
  {
    path: "/blog/:blogId",
    element: <Blog/>
  }
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
