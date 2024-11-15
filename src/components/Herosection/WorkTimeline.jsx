import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Worktimeline.css';

const  WorkTimeline = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const leftNavRef = useRef(null);

  const observerOptions = {
    threshold: 0.5,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(Number(entry.target.dataset.index));
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // ScrollTrigger for the left navigation to stay fixed
    gsap.to(leftNavRef.current, {
      scrollTrigger: {
        trigger: '.right', // When the right section starts scrolling
        start: 'top top', // When the top of the right section hits the top of the viewport
        end: 'bottom bottom', // When the bottom of the right section hits the bottom of the viewport
        pin: true, // Pin the left navigation
        scrub: true, // Smoothly scroll the left navigation
        pinSpacing: false, // Avoid extra space after the pinned element
      },
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex mt-[5vw] px-[15vw] w-full h-screen bg-white font-raleway">
      {/* Left Navigation */}
      <div
        ref={leftNavRef}
        className="left border-l p-10 w-1/4 h-full"
      >
        <h1 className={`mt-4 ${activeSection === 0 ? 'text-black font-bold' : 'text-zinc-400'}`}>
        Real Estate Meets the Digital Age        </h1>
        <h1 className={`mt-4 ${activeSection === 1 ? 'text-black font-bold' : 'text-zinc-400'}`}>
        F.I.G. Your Property, Your Investors, Our Support        </h1>
        <h1 className={`mt-4 ${activeSection === 2 ? 'text-black font-bold' : 'text-zinc-400'}`}>
        TimeShare. Invest, Stay, Earn        </h1>
        <h1 className={`mt-4 ${activeSection === 3 ? 'text-black font-bold' : 'text-zinc-400'}`}>
        List, Tokenize, Profit        </h1>
        <h1 className={`mt-4 ${activeSection === 4 ? 'text-black font-bold' : 'text-zinc-400'}`}>
        BrokerConnect | Join the Broker Network, Tap the Retail Investors        </h1>
      </div>

      {/* Right Side Sections */}
      <div className="right w-4/5 space-y-10 p-10 overflow-y-auto h-screen scrollbar-hide">
        {/* Analytics Moneliq's Work Section */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          data-index={0}
          className="Analytics_Moneliq's_Work p-[60px] rounded-3xl bg-zinc-100 h-[80vh]"
        >
          <div className="flex justify-start gap-5 items-center">
            <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
            <h1 className='text-[30px] font-medium'>Real Estate Meets the Digital Age</h1>
          </div>
          <div className="w-full h-[300px] rounded-3xl bg-white mt-10"></div>
          <div className="w-full h-[100px] rounded-3xl bg-white mt-5"></div>
          <h1 className='mt-5 text-[20px] font-medium text-black'>Blockchain-backed equity tokens unlock access to </h1>
          <h1 className='text-[20px] font-medium text-zinc-400'>premium properties.</h1>
        </div>

        {/* Multicurrency Accounts Section */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          data-index={1}
          className="Multicurrency_Accounts p-[60px] rounded-3xl bg-zinc-100 h-[80vh]"
        >
          <div className="flex justify-start gap-5 items-center">
            <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
            <h1 className='text-[30px] font-medium'>F.I.G. Your Property, Your Investors, Our Support</h1>
          </div>
          <div className="w-full h-[300px] rounded-3xl bg-white mt-10"></div>
          <div className="w-full h-[100px] rounded-3xl bg-white mt-5"></div>
          <h1 className='mt-5 text-[20px] font-medium text-black'>Add your assets and investors, we'll manage everything.</h1>
          {/* <h1 className='text-[20px] font-medium text-zinc-400'><span className='text-black'>need:</span> Tailored financial solutions to meet</h1> */}
          {/* <h1 className='text-[20px] font-medium text-zinc-400'>diverse needs.</h1> */}
        </div>
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          data-index={2}
          className="Multicurrency_Accounts p-[60px] rounded-3xl bg-zinc-100 h-[80vh]"
        >
          <div className="flex justify-start gap-5 items-center">
            <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
            <h1 className='text-[30px] font-medium'>TimeShare. Invest, Stay, Earn</h1>
          </div>
          <div className="w-full h-[300px] rounded-3xl bg-white mt-10"></div>
          <div className="w-full h-[100px] rounded-3xl bg-white mt-5"></div>
          <h1 className='mt-5 text-[20px] font-medium text-black'>Enjoy a villa getaway or earn rental income.</h1>
          {/* <h1 className='text-[20px] font-medium text-zinc-400'><span className='text-black'>need:</span> Tailored financial solutions to meet</h1> */}
          {/* <h1 className='text-[20px] font-medium text-zinc-400'>diverse needs.</h1> */}
        </div>
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          data-index={3}
          className="Multicurrency_Accounts p-[60px] rounded-3xl bg-zinc-100 h-[80vh]"
        >
          <div className="flex justify-start gap-5 items-center">
            <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
            <h1 className='text-[30px] font-medium'>List, Tokenize, Profit</h1>
          </div>
          <div className="w-full h-[300px] rounded-3xl bg-white mt-10"></div>
          <div className="w-full h-[100px] rounded-3xl bg-white mt-5"></div>
          <h1 className='mt-5 text-[20px] font-medium text-black'>Easily list properties and tap into fractional investment.</h1>
          {/* <h1 className='text-[20px] font-medium text-zinc-400'><span className='text-black'>need:</span> Tailored financial solutions to meet</h1> */}
          {/* <h1 className='text-[20px] font-medium text-zinc-400'>diverse needs.</h1> */}
        </div>
        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          data-index={4}
          className="Multicurrency_Accounts p-[60px] rounded-3xl bg-zinc-100 h-[80vh]"
        >
          <div className="flex justify-start gap-5 items-center">
            <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
            <h1 className='text-[30px] font-medium'>BrokerConnect | Join the Broker Network, Tap the Retail Investors</h1>
          </div>
          <div className="w-full h-[300px] rounded-3xl bg-white mt-10"></div>
          <div className="w-full h-[100px] rounded-3xl bg-white mt-5"></div>
          <h1 className='mt-5 text-[20px] font-medium text-black'>Sign up, sell property shares, and earn commissions on every successful deal.</h1>
          {/* <h1 className='text-[20px] font-medium text-zinc-400'><span className='text-black'>need:</span> Tailored financial solutions to meet</h1> */}
          {/* <h1 className='text-[20px] font-medium text-zinc-400'>diverse needs.</h1> */}
        </div>
      </div>
    </div>
  );
};

export default WorkTimeline;
