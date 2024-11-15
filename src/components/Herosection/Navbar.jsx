// Navbar.js
import React from 'react';
import logo from '../../assets/images/clogo.png';
import { SlArrowDown } from "react-icons/sl";


const Navbar = ({ navbarLinksRef, navbarLogoRef }) => {
  const options = {
    personal: ["Profile", "Settings", "Logout"],
    business: ["Dashboard", "Analytics", "Reports"],
    company: ["About Us", "Careers", "Contact"],
    en: ["English", "Spanish", "French"]
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg">
      <div className="flex w-full h-full">
        <div className="flex font-latoBold py-[3px] px-[7rem] justify-between w-full h-full">
          <div style={{
            height: '4rem',
            fontSize: '1.125rem', // Default text size (text-lg)
            gap: '2.5rem', // Default gap-10 (equivalent to 10 units)
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            '@media (min-width: 768px)': {
              fontSize: '1.25rem', // md:text-lg equivalent
              gap: '1.5rem', // md:gap-10 equivalent
            },
            '@media (min-width: 1024px)': {
              fontSize: '1.5rem', // lg:text-xl equivalent
              gap: '2rem', // lg:gap-10 equivalent
            },
            '@media (min-width: 1280px)': {
              fontSize: '1.875rem', // xl:text-2xl equivalent
              gap: '2.5rem', // xl:gap-10 equivalent
            },
            '@media (min-width: 1536px)': {
              fontSize: '2.25rem', // 2xl:text-3xl equivalent
              gap: '3rem', // 2xl:gap-12 equivalent
            },
          }}
            className="flex overflow-hidden h-[4rem] gap-10 justify-center items-center">
            {/* Personal dropdown */}
            <div className="relative group">
            <a className="flex gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[0] = el)}>
              Personal <SlArrowDown size={13} className="text-black" />
            </a>
            <DropdownMenu options={options.personal} />
          </div>
          {/* Business dropdown */}
          <div className="relative group">
            <a className="flex gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[1] = el)}>
              Business <SlArrowDown size={13} className="text-black" />
            </a>
            <DropdownMenu options={options.business} />
          </div>
          {/* Company dropdown */}
          <div className="relative group">
            <a className="flex gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[2] = el)}>
              Company <SlArrowDown size={13} className="text-black" />
            </a>
            <DropdownMenu options={options.company} />
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex overflow-hidden h-[4rem] text-lg gap-10 justify-center items-center">
          <img ref={navbarLogoRef} src={logo} alt="logo" />
        </div>

        {/* Right-side Links */}
        <div className="flex gap-10 overflow-hidden text-lg justify-center items-center">
          <a href="#" ref={(el) => (navbarLinksRef.current[3] = el)}>Help</a>
          <a href="#" ref={(el) => (navbarLinksRef.current[4] = el)}>Blog</a>
          <div className="relative group">
            <a className="flex gap-[10px] justify-center items-center" href="#" ref={(el) => (navbarLinksRef.current[5] = el)}>
              EN <SlArrowDown size={13} className="text-black" />
            </a>
            <DropdownMenu options={options.en} />
          </div>
          <a href="#" ref={(el) => (navbarLinksRef.current[6] = el)}>Log In</a>
          <a className="py-[10px] text-white px-5 text-lg bg-black rounded-full" href="#" ref={(el) => (navbarLinksRef.current[7] = el)}>Sign up</a>
        </div>
      </div>
    </div>
    </div >
  );
};

const DropdownMenu = ({ options }) => (
  <div className="absolute top-full left-0 mt-2 w-32 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    {options.map((option, index) => (
      <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        {option}
      </a>
    ))}
  </div>
);

export default Navbar;
