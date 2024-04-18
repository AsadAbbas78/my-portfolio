import React from 'react'
import Image from 'next/image'

const Skill = () => {
  return (
    <div id='skill'>
<main className='h-[800px] w-[100%] bg-[#1f242a] pt-32'>
<div><h1 className='text-white text-xl font-bold ml-8'>Skill.</h1></div>  

<main className='flex flex-wrap space-x-16 mt-16'>
<div className='h-1 w-[300px] bg-[#69d882] mt-4'></div>
<div> <h1 className='text-4xl text-white font-bold'>Personal Skills </h1><br /><br /><p className='h-[100px] w-[400px] text-white text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet. Corrupti sunt eligendi quae esse assumenda ad iure velit nihil quod perferendis veniam, amet nam temporibus, at saepe nemo! Fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae repellat labore alias quaerat deserunt ipsum sed error id vitae.</p><br /><br />
<div>
<h1 className='text-white text-sm font-bold'>Graphic Designer</h1>
<div className='flex flex-wrap items-center gap-6 pt-4'>
    <div className='relative h-3 w-[200px] bg-gray-500 rounded-sm'>
        <div className=' absolute bg-[#69d882] h-3 w-[160px]'></div>
    </div>
    <span className='text-right text-white'>70%</span>
</div>

</div><br />

<div><h1 className='text-white text-sm font-bold'>Web Developer</h1>
<div className='flex flex-wrap items-center gap-6 pt-4'>
    <div className='relative h-3 w-[200px] bg-gray-500 rounded-sm'>
        <div className=' absolute bg-[#69d882] h-3 w-[70px]'></div>
    </div>
    <span className='text-right text-white'>30%</span>
</div></div>

</div>

<div>
<div>
            <div className="h-[400px] w-[325px] bg-[#69d882]"></div>
            <Image
              alt=""
              src={require("../../../public/Assests/logo/skill.jpg")}
              className="h-[400px] w-[325px] relative bottom-[425px] right-6"
            />
          </div>

</div>

</main>



















</main>


    </div>
  )
}

export default Skill