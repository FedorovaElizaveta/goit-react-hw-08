import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
// import AppBar from "./components/AppBar/AppBar";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route element={<RestrictedRoute />}>
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
