import React from 'react'
import Image from 'next/image'


const Contact = () => {
  return (
    <div id='contact'>
<main className="h-[800px] w-[100%] bg-[#1f242a] pt-16">
        <h1 className="text-xl font-bold pl-44 text-white">Contact.</h1>
        <main className="flex flex-wrap w-screen h-screen justify-evenly mt-40">
          <div>
            <div className="h-[300px] w-[325px] bg-[#69d882]"></div>
            <Image
              alt=""
              src={require("../../../public/Assests/logo/contact img.png")}
              className="h-[300px] w-[325px] relative bottom-[325px] left-6"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-36 ">
              <div className="text-3xl font-bold text-white">Contact <br />Details</div>
              <div className="bg-[#69d882] h-1 w-[200px] mt-4"></div>
            </div>
            <br />
            <br />
            <main>
          <div className='flex flex-wrap items-center space-x-12'>
<h1 className='text-[#69d882]'>Phone:</h1>
<span className='text-white'>03085147645</span>

 </div><br />
 <div className='flex flex-wrap items-center space-x-12'>
<h1 className='text-[#69d882]'>Address:</h1>
<span className='text-white'>District Bwp tehsil Yazman</span>

 </div><br />
 <div className='flex flex-wrap items-center space-x-12'>
<h1 className='text-[#69d882]'>Email:</h1>
<span className='text-white'>Assadgamerchannel1@gmail.com</span>

 </div>



            </main>


          </div>
        </main>
      </main>
    </div>
  )
}

export default Contact