import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export type UserInfoState = {
  name: string;
  email: string;
  avator: string;
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "lincent",
    email: "qwe@qwe.qwe",
    avator: "avator1",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAvator: (state, action) => {
      state.avator = action.payload;
    },
    setUserInfo: (
      state,
      action: PayloadAction<{ name?: string; email?: string; avator?: string }>
    ) => {
      if (action.payload.name !== undefined) state.name = action.payload.name;
      if (action.payload.email !== undefined)
        state.email = action.payload.email;
      if (action.payload.avator !== undefined)
        state.avator = action.payload.avator;
    },
  },
});

export const userInfo = userInfoSlice.reducer;
export const { setName, setEmail, setAvator, setUserInfo } =
  userInfoSlice.actions;

//  hooks

export const useUserInfo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.userInfo);

  const handleSetName = (v: string) => {
    dispatch(setName(v));
  };

  const handleSetEmail = (v: string) => {
    dispatch(setEmail(v));
  };

  const handleSetAvator = (avator: string) => {
    dispatch(setAvator(avator));
  };

  const handleSetUserInfo = (v: UserInfoState) => {
    dispatch(
      setUserInfo({
        name: v.name,
        email: v.email,
        avator: v.avator,
      })
    );
  };

  return {
    data,
    handleSetAvator,
    handleSetEmail,
    handleSetName,
    handleSetUserInfo,
  };
};
