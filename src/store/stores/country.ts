import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { countryProps } from "@/types/layoutType";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

export type UserInfoState = {
  name: string;
  email: string;
  avator: string;
};

const countrySlice = createSlice({
  name: "country",
  initialState: {
    name: "lincent",
    flag: "",
  },
  reducers: {
    setCountry: (state, action: PayloadAction<countryProps | undefined>) => {
      if (action?.payload?.name !== undefined) state.name = action.payload.name;
      if (action?.payload?.flag !== undefined) state.flag = action.payload.flag;
    },
  },
});
export const country = countrySlice.reducer;
const { setCountry } = countrySlice.actions;

//  hooks

export const useCountry = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.country);

  const handleSetCountry = useCallback(
    (country?: countryProps) => {
      dispatch(setCountry(country));
    },
    [dispatch]
  );
  return {
    data,
    setCountry: handleSetCountry,
  };
};
