import React, { useEffect, useRef } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DailyFinance = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;

        gsap.fromTo(
            marqueeElement,
            { x: '100%' },
            {
                x: '-100%',
                scrollTrigger: {
                    trigger: marqueeElement,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
                ease: 'none',
            }
        );
    }, []);

    return (
        <div className='w-full h-full bg-white mt-[10vw]'>
            <div className="flex font-cambay overflow-hidden h-full w-full items-center flex-col">
                <h1 ref={marqueeRef} className='text-[100px] flex py-[2vw] whitespace-nowrap font-raleway text-[#2b2828] font-bold uppercase'>Welcome to India’s top <span className='ml-4 mr-4 text-[#2ab589]'> fractional investment </span>  platform.</h1>
                {/* <h1 className='px-4 py-2 bg-zinc-100 font-medium justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'>
                    <span><FaCalendarAlt /></span> Daily Finances
                </h1> */}
                {/* <h1 className='text-[60px] tracking-tight leading-[70px] font-medium text-center font-raleway mt-5'>Efficiency at its best: Moneliq's <br /> daily finances </h1> */}
                {/* <h1 className='mt-5 text-zinc-400 font-medium'>Empowering global finance management</h1> */}
            </div>
            <div className="w-full h-[35vw] mt-[5vw]">
                <div className="main w-full h-full px-[10vw] gap-[1vw] flex justify-center items-center">
                    <div className="left pr-[4vw] w-[40%] h-full flex flex-col justify-center items-start">
                        <h1 className='px-4 py-2 bg-zinc-100 font-medium justify-center items-center gap-3 flex text-[#2ab589] rounded-xl'><span><FaCalendarAlt /></span> Secure</h1>
                        <h1 className='2xl:text-[40px] md:text-[35px] font-medium font-raleway mt-5 leading-[2.4vw]'>Real Esate Meets the <br /> Digital Age</h1>
                        <h1 className='mt-4 text-zinc-400 font-regular'>Blockchain-backed <span className='font-medium text-[#2ab589]'>Equity-Tokens</span> unlock access to premium properties.</h1>
                    </div>
                    <div className="right w-[40%] h-full">
                        <div className="w-full relative h-full rounded-3xl bg-zinc-100 flex justify-center items-center">
                            <div className="w-[65%] p-[2.5vw] absolute h-[60%] left-[2vw] bg-red-500 rounded-3xl"></div>
                            <div className="w-[65%] p-[2.5vw] absolute h-[60%] z-10 bg-white rounded-3xl"></div>
                            <div className="w-[65%] p-[2.5vw] absolute h-[60%] right-[2vw] bg-green-500 rounded-3xl"></div>
                            <div className="flex absolute justify-between items-center bottom-10 px-[4vw] w-full ">
                                <button className='px-[2vw] py-3 bg-black text-zinc-300 rounded-full '> Back</button>
                                <button className='px-[2vw] py-3 bg-black text-zinc-300 rounded-full '> Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyFinance;
