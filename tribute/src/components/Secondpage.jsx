import React from 'react'

function Secondpage() {
  return (
    <div className='w-full rounded-tl-3xl rounded-tr-3xl h-screen p-10 bg-[#7bb575]'>
        <h1 className='text-[4vw] mb-6 border-b-2'>
        Early Career
        </h1>
        <div className='text-[1.7vw]'>
            <p className='mb-3'>  <span className='font-bold'>Zip2 Corporation:</span> Co-founded in 1995; provided city guide software for newspapers; sold to Compaq for nearly $300 million in 1999. </p>
            <p> <span className='font-bold'>X.com:</span> Founded in 1999, an online payment company; later became PayPal, which was sold to eBay for $1.5 billion in 2002.
            <div className='flex gap-5 '>
                <div className='w-1/2 mt-10  rounded-2xl h-[50vh] bg-[url("https://grist.org/wp-content/uploads/2022/04/xprize.jpg?resize=1536%2C864&quality=75&strip=all")] bg-cover bg-center '></div>
            <div className='w-1/2 h-[50vh] rounded-2xl border-2 border-zinc-600 mt-10  '>
                <h1 className='text-[2.5vw] px-4 text-emerald-900'>Awards and Recognition</h1>
                <p className='text-[1.5vw] p-4'> <span className='font-bold'>Time 100:</span> Included multiple times in Time magazine’s list of the most influential people.</p>
                <p className='text-[1.5vw] p-4'> <span className='font-bold'>Fortune's Businessperson of the Year:</span> Recognized for his contributions to technology and business.</p>
                <p className='text-[1.5vw] p-4'>Numerous accolades for his work in renewable energy, transportation, and space exploration.</p>
            </div>
            </div>
</p>
        </div>
    </div>
  )
}

export default Secondpage