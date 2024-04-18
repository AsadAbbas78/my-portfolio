import React from 'react'
import Image from 'next/image'

const Thank = () => {
  return (
    <div>
<main className="h-[800px] w-[100%] bg-[#1f242a] pt-16">
        <h1 className="text-xl font-bold pl-44 text-white">Thanks.</h1>
        <main className="flex flex-wrap w-screen h-screen justify-evenly mt-40">
          <div>
            
            <Image
              alt=""
              src={require("../../../public/Assests/logo/thanks.pic.png")}
              className="h-[300px] w-[400px] "
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-36">
              <div className="text-4xl font-bold text-white">THANK YOU</div>
              <div className="bg-[#69d882] h-1 w-64 mt-4"></div>
            </div>
            <br />
            <br />
            <div className=" h-[50px] w-[500px] text-white">
              <p>
                As a seasoned web developer, my journey is a tapestry woven with
                code. With years of experience, I ve honed my skills to craft
                digital landscapes where creativity meets functionality. From
                HTML to CSS, JavaScript to backend frameworks, 
              </p>
              <br />
              <br />
              <div className="flex flex-wra gap-14">
                
                <button className="text-white border-2 border-[#69d882] h-12 w-64 text-sm hover:text-[#1f242a] hover:bg-[#69d882]">
                  See More My Portfolio
                </button>

                <button className="text-[#1f242a] bg-[#69d882] h-12 w-64 text-sm hover:text-white hover:bg-transparent  border rounded border-[#69d882] focus">
                  Contact Me
                </button>

              </div>
            </div>
          </div>
        </main>
      </main>


    </div>
  )
}

export default Thank