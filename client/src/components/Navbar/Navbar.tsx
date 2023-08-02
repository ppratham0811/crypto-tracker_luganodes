"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import SearchBar from "../SearchBar";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <>
      <Box className="relative top-0 flex items-center justify-between px-8 py-4 bg-primary text-white border-b-1 border-solid border-white">
        <div className="flex items-center justify-center gap-2">
          <Image src="/logo-main.png" width={40} height={40} alt="Logo" />
          <a href="/" className="text-xl font-bold">Crypt.io</a>
        </div>
        <div className="lg:block hidden">
          <SearchBar />
        </div>
        <div className="hidden lg:block">
          <BsFillPersonFill className="text-white text-xl" />
        </div>
        <div
          className="lg:hidden block text-xl"
          onClick={() => setOpenNavbar(true)}
        >
          <GiHamburgerMenu />
        </div>
      </Box>

      {openNavbar && (
        <>
          <div className="lg:hidden block relative z-100 h-screen bg-secondary text-white">
            <AiOutlineClose
              onClick={() => setOpenNavbar(false)}
              className="absolute top-4 right-8 text-xl"
            />
            <Box className="md:px-6 px-4">
              <ul>
                <li>Account</li>
                <li>Search</li>
              </ul>
            </Box>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
