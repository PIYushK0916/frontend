import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

const CryptoAssets = () => {
    return (
        <div>
            <div className='w-full h-full'>
                <div className="w-full font-raleway p-[2vw] mt-[5vw] h-full bg-white">
                    <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                        <h1 className='px-4 py-2 bg-zinc-100 font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'>
                            <span><FaCalendarAlt /></span> <span >Where can you invest</span>
                        </h1>
                        <h1 className='text-[60px] tracking-tight leading-[70px] font-medium text-center font-raleway mt-5'>Unlock opportunities in properties you never <br /> knew you could own.</h1>
                        <h1 className='mt-5 text-zinc-400 font-medium'>Diversify your portfolio with a range of investment opportunities through <span className='text-zinc-600 font-semibold'>VENQ</span></h1>
                        <div className="flex gap-[5vw] mt-[4vw] text-[20px] font-semibold">
                            <h1 className='border-b-2 border-black'>Residential</h1>
                            <h1 className='text-zinc-400'>Plots</h1>
                            <h1 className='text-zinc-400'>AirBnBs</h1>
                            <h1 className='text-zinc-400'>Commercial</h1>
                            <h1 className='text-zinc-400'>Hotels & Resort</h1>
                        </div>
                        <div className="flex w-[1050px] h-[20vw] gap-[2vw] mt-[3vw] justify-center items-center">
                            <div className="w-[1230px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoAssets