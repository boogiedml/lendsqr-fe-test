import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./app.scss";
import RootLayout from "./components/templates/layout/RootLayout";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/users/Users";
import UserDetails from "./pages/dashboard/users/users.details/UserDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="/dashboard" />} />

        <Route path="auth/login" element={<Login />} />

        <Route element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Outlet />}>
            <Route index element={<Users />} />
            <Route path="details/:userId" element={<UserDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
