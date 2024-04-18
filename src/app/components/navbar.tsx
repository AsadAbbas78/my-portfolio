import Link from "next/link";
import React from "react";
import { TbWorld } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="z-50 sticky top-0 ">
      <header className="h-[100px] w-[100%] bg-[#1e242b] flex flex-wrap justify-around items-center ">
        <h1 className="text-xl font-bold text-white flex-wrap">PORTFOLIO.</h1>
        <div className=" space-x-14 flex flex-wrap text-sm  ">
          <Link href={"/"} className="text-[#69d880] hover:text-white">
          Home
          </Link>
          <Link href={"#about"} className="text-[#69d880] hover:text-white">
            
            About
          </Link>
          <Link href={"#project"} className="text-[#69d880] hover:text-white">
            Project
          </Link>
          <Link href={"#skill"} className="text-[#69d880] hover:text-white">
            Skill
          </Link>
          <Link href={"#client"} className="text-[#69d880] hover:text-white">
            Clinet
          </Link>
          <Link href={"#contact"} className="text-white hover:text-[#69d880]">
            Contact Me
          </Link>
        </div>
        <div className="flex flex-wrap space-x-3 font-bold">
          <Link href={""} className="text-[#69d880] hover:text-white">
            <TbWorld />
          </Link>
          <Link href={""} className="text-[#69d880] hover:text-white">
            <IoMailOutline />
          </Link>
          <Link href={""} className="text-[#69d880] hover:text-white">
            <FaPhone />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
