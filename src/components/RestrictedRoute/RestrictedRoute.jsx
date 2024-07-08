import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectToken,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const RestrictedRoute = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  if (isLoggedIn && token) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
