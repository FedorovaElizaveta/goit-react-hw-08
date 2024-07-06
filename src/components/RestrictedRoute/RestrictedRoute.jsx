import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectToken,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate, Outlet } from "react-router-dom";

const RestrictedRoute = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn && token) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
