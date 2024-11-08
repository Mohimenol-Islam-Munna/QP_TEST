import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import ErrorPage from "../pages/Error";
import ProfilePage from "../pages/ProfilePage";
import DashboardPage from "../pages/DashboardPage";
import MyComponentPage from "../pages/MyComponentPage";
import PostsPage from "../pages/PostPage";
import CommentsPage from "../pages/CommentsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "posts",
            element: <PostsPage />,
          },
          {
            path: "comments",
            element: <CommentsPage />,
          },
        ],
      },
      {
        path: "my-component",
        element: <MyComponentPage />,
      },
      {
        path: "user",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
