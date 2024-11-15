import React from 'react'

const Cards = () => {
  return (
    <div className='w-full font-raleway h-[30vw] mt-[8vw] flex justify-center items-center gap-[4vw]'>
        <div className="w-[20vw] relative p-6 h-[22vw] bg-zinc-100 rounded-3xl flex flex-col justify-center items-center">
          <h1 className='absolute font-roboto text-[250px] font-bold text-zinc-600 -top-[10vw] -left-[2vw]'>1</h1>
            <h1 className='text-[25px] font-medium'>Sign Up & KYC</h1>
            <h1 className='text-center font-medium text-zinc-400 mt-5 text-[15px]'>Create your free account and complete a quick KYC process to get access.</h1>
            <div className="w-full h-[200px] mt-6 bg-white rounded-[30px]"></div>
        </div>
        <div className="w-[20vw] relative p-6 h-[22vw] bg-zinc-100 rounded-3xl flex flex-col justify-center items-center">
        <h1 className='absolute font-roboto text-[250px] font-bold text-zinc-600 -top-[10vw] -left-[2vw]'>2</h1>
            <h1 className='text-[25px] font-medium'>Select</h1>
            <h1 className='text-center font-medium text-zinc-400 mt-5 text-[15px]'>Explore exclusive real estate listings and choose the property that fits your goals.</h1>
            <div className="w-full h-[200px] mt-6 bg-white rounded-[30px]"></div>
        </div>
        <div className="w-[20vw] relative p-6 h-[22vw] bg-zinc-100 rounded-3xl flex flex-col justify-center items-center">
        <h1 className='absolute font-roboto text-[250px] font-bold text-zinc-600 -top-[10vw] -left-[2vw]'>3</h1>
            <h1 className='text-[25px] font-medium'>Invest</h1>
            <h1 className='text-center font-medium text-zinc-400 mt-5 text-[15px]'>Secure your investment with ease and watch your portfolio grow.</h1>
            <div className="w-full h-[200px] mt-6 bg-white rounded-[30px]"></div>
        </div>
    </div>
  )
}

export default Cards