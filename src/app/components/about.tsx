import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about">
      <main className="h-[800px] w-[100%] bg-[#1f242a] pt-16">
        <h1 className="text-xl font-bold pl-44 text-white">ABOUT.</h1>
        <main className="flex flex-wrap w-screen h-screen justify-evenly mt-40">
          <div>
            <div className="h-[400px] w-[325px] bg-[#69d882]"></div>
            <Image
              alt=""
              src={require("../../../public/Assests/logo/a6be335a-8b15-4968-9e3c-4884ca1b0a7b.jpg")}
              className="h-[400px] w-[325px] relative bottom-[425px] left-6"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-36">
              <div className="text-3xl font-bold text-white">About Me</div>
              <div className="bg-[#69d882] h-1 w-64 mt-4"></div>
            </div>
            <br />
            <br />
            <div className=" h-[50px] w-[500px] text-white">
              <p>
                As a seasoned web developer, my journey is a tapestry woven with
                code. With years of experience, I ve honed my skills to craft
                digital landscapes where creativity meets functionality. From
                HTML to CSS, JavaScript to backend frameworks, I ve traversed
                the ever-evolving realm of web technologies. Each project is a
                canvas where I blend design aesthetics with seamless user
                experiences, ensuring every click feels intuitive and
                purposeful.{" "}
              </p>
              <br />
              <br />
              <div className="flex flex-wra gap-14">
                <button className="text-[#1f242a] bg-[#69d882] h-12 w-32 text-sm hover:text-white hover:bg-transparent  border rounded border-[#69d882] focus">
                  Hire Me
                </button>
                <button className="text-white border-2 border-[#69d882] h-12 w-32 text-sm hover:text-[#1f242a] hover:bg-[#69d882]">
                  Download Cv
                </button>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default About;
