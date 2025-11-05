import { SearchBar } from "@/components/Searchs/Search.desktop";
import { SearchBarButton } from "@/components/Searchs/Search.mobile";
import React from "react";

export const Search = () => {
  return (
    <>
      <SearchBar className="hidden sm:block flex-1" />
      <SearchBarButton className="sm:hidden flex-1" />
    </>
  );
};
