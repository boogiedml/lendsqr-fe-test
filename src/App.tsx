import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./app.scss";
import Login from "./pages/auth/login/Login";
import RootLayout from "./components/templates/layout/RootLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/users/Users";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="/dashboard" />} />

        <Route path="auth/login" element={<Login />} />

        <Route path="" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Outlet />}>
            <Route index element={<Users />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
