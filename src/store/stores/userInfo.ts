import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
