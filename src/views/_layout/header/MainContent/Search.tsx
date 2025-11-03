import { SearchBar } from "@/components/Search.desktop";
import { SearchBarButton } from "@/components/Search.mobile";
import React from "react";

export const Search = () => {
  return (
    <>
      <SearchBar className="hidden sm:block flex-1" />
      <SearchBarButton className="sm:hidden flex-1" />
    </>
  );
};
