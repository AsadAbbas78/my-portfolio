import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const Work = () => {
  return (
    <div>
      <main className="h-[630px] w-[100%] bg-[#1f242a]">
        <div className="text-white font-bold pl-16 text-xl">Works.</div>

        <main className="flex flex-wrap justify-center items-center space-x-56 pl-32 pt-16">
          <div>
            {" "}
            <h1 className="text-4xl font-bold text-white">My Best Works</h1>
          </div>
          <div className="h-1 w-[958px] bg-[#69d882]"></div>
        </main>

        <main className="flex flex-wrap  justify-center space-x-24 pt-24">
          <div>
            <div>
              <h1 className="text-[#69d882]">2022 Best Design</h1>
              <p className="h-[30px] w-[250px] pt-4 text-white text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                doloribus animi voluptates
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
              <h1 className="text-[#69d882]">2022 Best Design</h1>
              <p className="h-[30px] w-[250px] pt-4 text-white text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                doloribus animi voluptates
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <button>
              <div className="flex gap-6">
                <h1 className="text-[#69d882]">See More</h1>
                <h1 className="text-white text-2xl">
                  <FaLongArrowAltRight />
                </h1>
              </div>
            </button>
          </div>

          <div>
            <Image
              alt=""
              src={require("../../../public/Assests/logo/best works.webp")}
              className="h-[400px] w-[300px]"
            />
          </div>

          <div>
            <Image
              alt=""
              src={require("../../../public/Assests/logo/best works 2.jpg")}
              className="h-[400px] w-[300px]"
            />
          </div>
        </main>
      </main>
    </div>
  );
};

export default Work;
