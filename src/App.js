import * as React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/Student/Dashboard";
import Sidebar from "./components/UI/Sidebar";
import AdminSidebar from "./components/AdminSidebar";
import Content from "./pages/Student/Content";
import Assignment from "./pages/Student/Assignment";
import DetailedContent from "./pages/Student/DetailedContent";
import DetailedAssignment from "./pages/Student/DetailedAssignment";
import TeacherContent from "./pages/Teacher/TeacherContent";
import TeacherAssignment from "./pages/Teacher/TeacherAssignment";
import AdminHome from "./pages/Admin/AdminHome";
import AdminStudent from "./pages/Admin/AdminStudent";
import AdminTeacher from "./pages/Admin/AdminTeacher";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      
      
    ]
  },
  {
    element: <AdminSidebar />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/admin/students",
        element: <AdminStudent />,
      },
      {
        path: "/admin/teachers",
        element: <AdminTeacher />,
      }
    ]
  },
  {
    path: "/module/:moduleId/content",
    element: <Content />,
  },
  {
    path:"/module/:id/content/:id",
    element: <DetailedContent />,
  },
  {
    path:"/module/:moduleId/assignment",
    element: <Assignment />,
  },
  {
    path:"/module/:id/assignment/:id",
    element: <DetailedAssignment />,
  },
  {
    path: "/teachercontent",
    element: <TeacherContent />,
  },
  {
    path: "/teacherassignment",
    element: <TeacherAssignment />,
  },
]);

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
