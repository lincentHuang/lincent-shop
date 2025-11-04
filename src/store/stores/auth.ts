import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    clientInfo: {
      name: "",
      email: "",
      avator: "avator1",
    },
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const auth = authSlice.reducer;
export const { login, logout } = authSlice.actions;

//  hooks

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
