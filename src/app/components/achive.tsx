import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Achive = () => {
  return (
    <div>
      <main className="h-[800px] w-[100%] bg-[#1f242a]">
        <h1 className="text-xl text-white font-bold pl-8">Achievement.</h1>
        <div className="flex flex-wrap relative left-[700px] items-center gap-12">
          <h1 className="text-white font-bold text-4xl">Achievement</h1>
          <div className="h-1 w-[600px] bg-[#69d880]"></div>
        </div>

        <main className="pt-10 flex flex-wrap justify-center space-x-16">
          <div className="h-[500px] w-[300px] border-2 border-[#69d880] text-center pt-16">
            <h1 className="text-xl text-[#69d880]">
              WINNING <br />
              COMPETITION
            </h1>
            <br />
            <div className="flex flex-wrap items-center justify-evenly">
              <span className="text-[#69d880] text-xl">
                <TiTickOutline />
              </span>
              <h1 className="text-white">
                1st 2022 National <br />
                Design Competition
              </h1>
            </div>
            <br />
            <br />
            <div className="flex flex-wrap items-center justify-evenly">
              <span className="text-white text-xl">
                <TiTickOutline />
              </span>
              <h1 className="text-white">
                2st 2022 World <br />
                Design Competition
              </h1>
            </div>
            <br />
            <br />
            <div className="flex flex-wrap items-center justify-evenly">
              <span className="text-[#69d880] text-xl">
                <TiTickOutline />
              </span>
              <h1 className="text-white">
                3st 2021 National <br />
                Design Competition
              </h1>
            </div>
          </div>

          <div className="h-[350px] w-[300px] border-2 border-[#69d880] text-center pt-10 mt-36">
            <h1 className="text-xl  text-[#69d880]">
              BEST SOCIAL <br />
              MEDIA DESIGN <br />
              <br />
              <br />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus animi quibusdam optio repudiandae dicta ea
              </p>
            </h1>
            <br />
          </div>

          <div className="h-[350px] w-[300px]  bg-[#69d880] text-center pt-10 mt-36">
            <h1 className="text-xl  text-[#1f242a]">
              {" "}
              2022 BEST DESIGN <br />
              WORLDWIDE <br />
              <br />
              <br />
              <p className="text-[#1f242a]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus animi quibusdam optio repudiandae dicta ea
              </p>
            </h1>
            <br />
          </div>
        </main>
      </main>
    </div>
  );
};

export default Achive;
