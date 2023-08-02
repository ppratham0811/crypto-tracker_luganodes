"use client";

import { Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <>
      <div className="bg-background flex items-center justify-center rounded-xl px-2 w-full">
        <Input
          className="border-none text-black placeholder-black focus:outline-none"
          placeholder="Search for Cryptocurrency..."
        />
        <AiOutlineSearch className="text-black" />
      </div>
    </>
  );
};

export default SearchBar;
