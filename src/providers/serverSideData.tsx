import { useCountry } from "@/store/stores/country";
import { countryProps } from "@/types/layout";
import React, { useEffect } from "react";
type ServerSideDataProviderProps = {
  country?: countryProps;
};
export const ServerSideDataProvider = ({
  country,
}: ServerSideDataProviderProps) => {
  const { setCountry } = useCountry();
  useEffect(() => {
    setCountry(country);
  }, [country, setCountry]);
  return <></>;
};
