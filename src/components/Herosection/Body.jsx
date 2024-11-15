// Body.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import './Body.css'; // Import the CSS file

const Body = () => {
  const textRef = useRef([]);
  const navbarLinksRef = useRef([]);
  const blackBgRef = useRef(null);
  const navbarLogoRef = useRef(null);

  useEffect(() => {
    // Create a timeline
    const tl = gsap.timeline();

    // Set initial hidden states
    tl.set(navbarLogoRef.current, { y: 200, opacity: 0 });
    tl.set(navbarLinksRef.current, { y: -200, opacity: 0 });
    tl.set(textRef.current, { y: 200, opacity: 0 });
    tl.set(blackBgRef.current, { y: 900 });

    // VENQ text animation (after logo)
    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Navbar links animation (after VENQ)
    tl.to(navbarLinksRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // Logo animation
    tl.to(navbarLogoRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      delay: -0.5,
    });

    // Black background div animation to cover the VENQ text
    tl.to(blackBgRef.current, {
      y: 0,
      duration: 2,
      ease: 'power2.out',
      delay: -2.5,
    });
  }, []);

  return (
    <>
      <div className="body-container">
        <Navbar navbarLinksRef={navbarLinksRef} navbarLogoRef={navbarLogoRef} />
        <div className="venq-container">
          <div className="text-overflow">
            <h1 className="venq-text">
              {Array.from("VENQ").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => (textRef.current[index] = el)}
                  className="venq-letter"
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
          <div ref={blackBgRef} className="black-bg">
            <div className="black-bg-inner"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
