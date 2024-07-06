import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectToken,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
