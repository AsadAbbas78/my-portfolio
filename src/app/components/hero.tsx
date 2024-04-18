import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <main>
        <div className="h-[670px] w-[100%] bg-[#1e242b]">
          <div className=" w-screen h-screen flex justify-center items-center flex-wrap ">
            <div className=" relative left-24">
              <h1 className="text-sm text-[#69d880]">Hello Everyone.</h1>
              <h1 className="font-bold  text-8xl text-white">
                I.m ASAD <br />
                ABBAS
              </h1>
              <br />
              <br />
              <div className="flex flex-wrap">
                <button className="h-[50px] w-[200px] font-bold border-[#69d880] border-2 text-sm text-white">
                  WEB DEVELOPER
                </button>
                <div className="h-[50px] w-[50px] bg-[#69d880] flex justify-center items-center">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
            <div className="">
              <Image
                alt=""
                src={require("../../../public/Assests/logo/917f80de-17bf-40e6-94fc-1ed838befd4e-removebg-preview.png")}
                className="h-[600px] w-[100%]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
