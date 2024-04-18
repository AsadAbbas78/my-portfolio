import React from 'react'
import Image from 'next/image'


const Client = () => {
  return (
    <div id='client'>
<main className='h-[770px] w-[100%] bg-[#1e242b]'>
<h1 className='font-bold text-white text-xl  pl-44'> Clients.</h1>

<div className='flex flex-wrap pl-64 gap-24 justify-center pt-16'>
<div>
<h1 className='text-4xl text-white font-bold'>Happy Clients Says</h1>
</div>
<div className='bg-[#69d880] h-1 w-[860px] mt-6'></div>
</div>
<div className='flex flex-wrap justify-center space-x-28 pt-24'>

<div className='h-[300px] w-[500px] rounded-none border-2 border-[#69d880]'>
<div className='flex  flex-wrap  space-x-8 justify-center items-center pt-10'>
<div><Image alt='' src={require('../../../public/Assests/logo/client_girl-removebg-preview.png')} className='h[100px] w-[100px] border-4 border-[#69d880] rounded-full'/> </div>
<div><h1 className='text-xl text-white font-bold'>JULIANA SILVA <br /><span className='text-sm'>Our Client</span></h1></div><br />
<p className='item-center text-white text-sm mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia temporibus facilis, aut dolor nemo sapiente ve Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
</div>



</div>

<div className='h-[300px] w-[550px] rounded-none border-2 border-[#69d880]'>
<div className='flex  flex-wrap  space-x-8 justify-center items-center pt-10'>
<div><Image alt='' src={require('../../../public/Assests/logo/boy_client_circle-removebg-preview.png')} className='h[100px] w-[100px] border-4 border-[#69d880] rounded-full'/> </div>
<div><h1 className='text-xl text-white font-bold'>DANIEL GALLEGO <br /><span className='text-sm'>Our Client</span></h1></div><br />
<p className='item-center text-white text-sm mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia temporibus facilis, aut dolor nemo sapiente ve Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
</div>



</div>


</div>


</main>


    </div>
  )
}

export default Client