import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

export type UserInfoState = {
  name?: string;
  email?: string;
  avator?: string;
  imageUrl?: string;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    userInfo: {
      name: "lincent",
      email: "qwe@qwe.qwe",
      avator: "avator1",
      imageUrl: "",
    },
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    setUserInfo: (state, action: PayloadAction<UserInfoState>) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      };
    },
  },
});

export const auth = authSlice.reducer;
export const { login, logout, setUserInfo } = authSlice.actions;

//  hooks

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  const handleLogin = useCallback(() => {
    dispatch(login());
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const handleSetUserInfo = useCallback(
    (v: UserInfoState) => {
      dispatch(
        setUserInfo({
          name: v?.name,
          email: v?.email,
          avator: v?.avator,
          imageUrl: v?.imageUrl,
        })
      );
    },
    [dispatch]
  );

  return {
    isLogin,
    userInfo,
    login: handleLogin,
    logout: handleLogout,
    setUserInfo: handleSetUserInfo,
  };
};
