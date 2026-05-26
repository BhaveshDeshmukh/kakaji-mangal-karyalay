import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";

import AdminPanel from "./components/AdminPanel";

import AdminLogin from "./pages/AdminLogin";

function ProtectedRoute({ children }) {

  const isLoggedIn =
    localStorage.getItem("adminLoggedIn");

  return isLoggedIn === "true"
    ? children
    : <Navigate to="/management" />;
}

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/management"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>

              <AdminPanel />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;