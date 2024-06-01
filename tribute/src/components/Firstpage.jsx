import React from 'react'

function Firstpage() {
  return (
    <div className='w-full  h-screen flex'>
        <div className='w-1/3 h-screen mr-8 rounded-xl bg-cover bg-center scale-75  bg-[url("https://w0.peakpx.com/wallpaper/727/892/HD-wallpaper-elon-musk-elon-musk-elon-musk.jpg")]'></div>
        <div className='w-2/3 h-screen  tracking-tight text-black  px-20 py-12'>
            <h1 className='border-b-2 text-[5vw] border-zinc-500'>ELON MUSK</h1>
            <div className='text-[1.5vw]'>Full Name: Elon Reeve Musk <br />
                              Birthdate: June 28, 1971 <br />
                              Birthplace: Pretoria, South Africa <br />
                                 Nationality: South African, Canadian, American</div>
                                 <div className='w-full mt-10 h-[22vh]  rounded-xl bg-zinc-300'>
                                 <h3 className='p-3'>Education: <br />
-Attended Queen's University in Canada <br />
-Transferred to the University of Pennsylvania, earning degrees in    physics and economics</h3>
                                 </div>
        </div>
    </div>
  )
}

export default Firstpage