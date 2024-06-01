import React from 'react'

function Thirdpage() {
  return (
    <div className='w-full  gap-4 px-4 h-[145vh]'>
    <h1 className='text-[3vw] font-bold p-6'>Major Ventures</h1>  
    <div className='main1 gap-3 w-full pt-7 h-[60vh] flex '>
    <div className='border-2 bg-[#e99999] border-zinc-400 w-1/3  '>
        <h1 className='text-[3vw] p-10 font-["dancing_script"]'>SpaceX</h1>
        <p className='p-10'>Founded: 2002 <br />
        Objective: To reduce space transportation costs and enable the colonization of Mars.</p>
    </div>
    <div className='border-2 bg-[#91d78d] border-zinc-900 w-1/3  '>
    <h1 className='text-[3vw] p-10 font-["dancing_script"]'>Tesla, Inc.</h1>
        <p className='p-10'>Joined: 2004 <br />
        Objective: Accelerate the advent of sustainable transport by bringing compelling electric cars to market. </p>   </div>
    <div className='border-2 bg-[#e99999] border-zinc-400 w-1/3  '>
    <h1 className='text-[3vw] p-10 font-["dancing_script"]'>SolarCity</h1>
        <p className='p-10'>Founded: 2006<br />
        Objective: Provide solar power systems for homes, businesses, and governments.
</p>
    </div>
    </div>
    <div className='main2 gap-3 w-full  h-[60vh] mt-10 flex '>
    <div className='border-2 bg-[#91d78d] border-zinc-900 w-1/3  '>
    <h1 className='text-[3vw] p-10 font-["dancing_script"]'>Neuralink</h1>
        <p className='p-10'>Founded: 2016 <br />
        Objective: Develop implantable brain–machine interfaces to connect humans and computers.</p>
    </div>
    <div className='border-2 bg-[#e99999] border-zinc-400 w-1/3  '>
    <h1 className='text-[3vw] p-10 font-["dancing_script"]'>The Boring Company</h1>
        <p className='p-10'>Founded: 2016 <br />
        Objective: Reduce traffic in cities through a network of underground tunnels.</p>
    </div>
    <div className='border-2 bg-[#91d78d] border-zinc-900 w-1/3  '>
    <h1 className='text-[3vw] p-10 font-["dancing_script"]'>OpenAI</h1>
        <p className='p-10'>Co-founded: 2015 <br />
        Objective: Promote and develop friendly AI in a way that benefits humanity.</p>
    </div>
    </div>
    </div>
    
    
  )
}

export default Thirdpage