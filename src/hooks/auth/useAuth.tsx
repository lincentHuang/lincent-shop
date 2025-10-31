import { RootState } from "@/store";
import { login, logout } from "@/store/stores/auth";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    isLogin,
    login: handleLogin,
    logout: handleLogout,
  };
};
