import React from "react";
import Image from "next/image";

const Brand = () => {
  return (
    <div>
      <main className="bg-[#1f242a] h-[770px] w-[100%]">
        <h1 className="text-white font-bold text-xl pl-44">Brands.</h1>
        <main className=" flex flex-wrap justify-center  gap-16 mt-24 pl-28">
          <div>
            <Image
              alt=""
              src={require("../../../public/Assests/logo/iphone_bg-removebg-preview.png")}
              className=""
            />
          </div>
          <div className="flex flex-wrap mt-16 ">
            <div className="text-white ">
              <h1 className="text-4xl font-bold">
                Brand <br />
                Identity{" "}
              </h1>
              <br />
              <span className="text-sm text-[#69d880]">SOCIAL MEDIA DESIGN</span>
              <br />
              
              <p className="h-16 w-[400px] mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                nulla quam quaerat, sequi impedit odit aliquam maxime
                dignissimos voluptate assumenda porro voluptatem in minus
                consectetur aspernatur tenetur officiis dolor rerum ex
                asperiores? Inventore ipsa veritatis exercitationem ea odio
                adipisci commodi.
              </p>
            </div>
            <div className="bg-[#69d880] h-1 w-[500px] mt-10"></div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default Brand;
