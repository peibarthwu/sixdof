"use client";

import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Intro = () => {
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current line
  const audio = useRef(null);

  const sequence = [
    { text: "Press space to enable audio and continue.", delay: 3000 },
    { text: "Our hands are open", delay: 3000 },
    { text: "Our fingers are splayed", delay: 2000 },
    { text: "Our palms are to the ceiling, to the sky", delay: 2500 },
    { text: "We are giving nothing", delay: 3000 },
    { text: "We are empty handed.", delay: 3000 },
    {
      text: "We are looking upwards at a 45 degree angle, we are looking over our shoulders, we are watching our backs.",
      delay: 3000,
    },
    { text: "If you behave we will show you what's in the case.", delay: 3000 },
    {
      text: "A variety of stolen goods and materials for making other materials actually.",
      delay: 3000,
    },
    {
      text: "Discarded trends and some old currencies",
      delay: 3000,
    },
    { text: "There's not a whole lot in there.", delay: 3000 },
    // { text: "Nothing worth too much anymore.", delay: 3000 },
    { text: "Better not to open it.", delay: 3000 },
    { text: "Leave it be.", delay: 3000 },
    { text: "And protect it anyhow.", delay: 3000 },
  ];

  const currentSequence = [
    sequence[currentStep]?.text,
    sequence[currentStep]?.delay,
  ];

  // Handle click to go to the next sequence step
  const handleClick = (e) => {
    if (e.code === "Space") {
      if (currentStep < sequence.length) {
        setCurrentStep(currentStep + 1); // Move to the next step
      }
    }
  };

  const handleTouch = (e) => {
    if (currentStep < sequence.length) {
      setCurrentStep(currentStep + 1); // Move to the next step
    }
  };

  useEffect(() => {
    if (currentStep === 1) {
      audio.current.play();
    }
    // document.addEventListener('click', handleClick);
    document.addEventListener("keydown", handleClick);
    document.addEventListener("touchstart", handleTouch);

    // Cleanup event listeners on unmount
    return () => {
      //   document.removeEventListener('click', handleClick);
      document.removeEventListener("keydown", handleClick);
      document.removeEventListener("touchstart", handleTouch);
    };
  }, [currentStep]);

  return (
    <div className="absolute z-1 text-left mx-8 pl-2 md:mx-32 my-12 w-git bg-[#ffffff88] backdrop-blur-sm max-w-[700px] bottom-0 ">
     {currentStep < 14 ? <TypeAnimation
        wrapper="span"
        omitDeletionAnimation={true}
        key={currentStep}
        sequence={currentSequence}
        speed={50}
        repeat={0}
        cursor={true}
        preRenderFirstString={false}
        style={{
          display: 'inline-block',
          color: 'black',
          fontSize: '20px',
          paddingRight: '2px'
        }}
      /> :
       <Link href="/">
          <span className="relative z-1 text-[20px] pr-2">Return home</span>
      </Link>     
      }
      <audio src="/seventysixth.mp3" ref={audio} />
    </div>
  );
};

export default Intro;
