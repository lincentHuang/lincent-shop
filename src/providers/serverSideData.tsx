import { countryProps } from "@/types/layout";
import React from "react";
type ServerSideDataProviderProps = {
  country?: countryProps;
};
export const ServerSideDataProvider = ({
  country,
}: ServerSideDataProviderProps) => {
    
  return <div>serverSideData</div>;
};
