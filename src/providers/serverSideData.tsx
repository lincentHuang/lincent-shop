"use client";
import { useAuth } from "@/store/stores/auth";
import { useCountry } from "@/store/stores/country";
import { countryProps } from "@/types/layout";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
type ServerSideDataProviderProps = {
  country?: countryProps;
};
export const ServerSideDataProvider = ({
  country,
}: ServerSideDataProviderProps) => {
  const { setCountry } = useCountry();
  const { setUserInfo, login, logout } = useAuth();
  const session = useSession();
  useEffect(() => {
    setCountry(country);
  }, [country, setCountry]);

  useEffect(() => {
    if (session.data) {
      setUserInfo({
        name: session.data.user?.name || "",
        email: session.data.user?.email || "",
        avator: "avator1",
        imageUrl: session.data.user?.image || "",
      });
      login();
    }
    if (!session.data) {
      logout();
      setUserInfo({
        name: "",
        email: "",
        avator: "avator1",
        imageUrl: "",
      });
    }
  }, [login, logout, session, setUserInfo]);
  return <></>;
};
