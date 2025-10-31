import { RootState } from "@/store";
import {
  setAvator,
  setEmail,
  setName,
  setUserInfo,
  UserInfoState,
} from "@/store/stores/userInfo";
import { useDispatch, useSelector } from "react-redux";

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
