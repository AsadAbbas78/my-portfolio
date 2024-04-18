import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div id="project">
      <main className="h-[800px] w-[100%] bg-[#1f242a] pt-10">
        <div>
          <h1 className="text-white font-bold text-xl pl-44">Project.</h1>
        </div>
        <main className="flex flex-wrap gap-20 justify-center items-center relative top-24 left-24">
          <div>
            <h1 className="text-4xl text-white font-bold">Recents Project</h1>
          </div>
          <div className="bg-[#69d882] h-1 w-[65%]"></div>
        </main>
        <main className="flex w-screen h-screen items-center justify-center gap-16">
          <Link href={""}>
            <div>
              <Image
                alt=""
                src={require("../../../public/Assests/logo/brand design.jpg")}
                className="h-[350px] w-[350px]"
              />
              <br />
              <h1 className="text-white text-2xl font-bold">BRANDING DESIGN</h1>
              <h1 className="text-[#69d882] text-sm">Portfolio 2023</h1>
            </div>
          </Link>

          <Link href={""}>
            <div>
              <Image
                alt=""
                src={require("../../../public/Assests/logo/website design.jpg")}
                className="h-[350px] w-[350px]"
              />
              <br />
              <h1 className="text-white text-2xl font-bold">WEBSITE DESIGN</h1>
              <h1 className="text-[#69d882] text-sm">Portfolio 2024</h1>
            </div>
          </Link>
          <Link href={""}>
            <div>
              <Image
                alt=""
                src={require("../../../public/Assests/logo/illuration desgn.jpg")}
                className="h-[350px] w-[350px]"
              />
              <br />
              <h1 className="text-white text-2xl font-bold">
                ILLUSRATION DESIGN
              </h1>
              <h1 className="text-[#69d882] text-sm">Portfolio 2025</h1>
            </div>
          </Link>
        </main>
      </main>
    </div>
  );
};

export default Project;
