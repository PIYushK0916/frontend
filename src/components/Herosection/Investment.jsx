import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import './investment.css'

const Investment = () => {
    return (
        <div className='w-full h-full'>
            <div className="w-full font-raleway p-[2vw] h-full bg-white">
                <div className="flex font-raleway overflow-hidden w-full items-center flex-col">
                    <h1 className='px-4 py-2 bg-zinc-100 font-semibold justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'>
                        <span><FaCalendarAlt /></span> <span >Investments</span>
                    </h1>
                    <h1 className='text-[60px] tracking-tight leading-[70px] font-medium text-center font-raleway mt-5'>Spend, Save and manage your <br /> money, all in one place</h1>
                    <h1 className='mt-5 text-zinc-400 font-medium'>Open full bank account from phone, for free</h1>
                </div>
                <div className="flex w-full h-[35vw] gap-[1vw] mt-[5vw] justify-center items-center">
                    <div className="w-[600px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
                        <h1 className='text-[38px] mt-5 font-medium tracking-tight' >Security that never sleeps</h1>
                        <p className='mt-2 font-medium text-[17px] text-zinc-400'>Protected by a 2500 strong 24/7 dedicated team, Moneliq's customers saved more than $300M in potentially fraudulent transaction in 2020 alone.</p>
                        <button id='hover' className='px-[1.5vw] py-3 bg-black rounded-full mt-5 text-zinc-100'>Explore Security</button>
                    </div>
                    <div className="w-[600px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
                        <h1 className='text-[38px] mt-5 font-medium tracking-tight' >Security that never sleeps</h1>
                        <p className='mt-2 font-medium text-[17px] text-zinc-400'>Protected by a 2500 strong 24/7 dedicated team, Moneliq's customers saved more than $300M in potentially fraudulent transaction in 2020 alone.</p>
                        <button className='px-[1.5vw] py-3 bg-black rounded-full mt-5 text-zinc-100'>Explore Security</button>
                    </div>
                </div>
                <div className="flex w-full h-[20vw] gap-[2vw] mt-[1vw] justify-center items-center">
                    <div className="w-[1230px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
                        <h1 className='text-[38px] mt-5 font-medium tracking-tight' >You call the stocks</h1>
                        <p className='mt-2 font-medium text-[17px] text-zinc-400'>Protected by a 2500 strong 24/7 dedicated team, Moneliq's customers <br /> saved more than $300M in potentially fraudulent transaction in 2020 alone.</p>
                        <button className='px-[1.5vw] py-3 bg-black rounded-full mt-5 text-zinc-100'>Explore Stocks</button>
                    </div>
                </div>
                <div className="flex w-full h-[28vw] gap-[1vw] mt-[1vw] justify-center items-center">
                    <div className="w-[400px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
                        <h1 className='text-[38px] mt-5 font-medium tracking-tight' >Keep count with categories</h1>
                    </div>
                    <div className="w-[400px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
                        <h1 className='text-[38px] mt-5 font-medium tracking-tight' >Security that never sleeps</h1>
                        
                    </div>
                    <div className="w-[400px] h-full bg-zinc-100 rounded-3xl p-[2vw]">
                        <h1 className='text-[38px] mt-5 font-medium tracking-tight' >Join 40+ Million using</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Investment