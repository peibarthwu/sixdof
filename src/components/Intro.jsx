'use client';

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current line

  const sequence = [
    { text: 'Press anything.', delay: 3000 },
    { text: 'Your hands are open', delay: 3000 },
    { text: 'Your fingers are splayed', delay: 2000 },
    { text: 'Your palms are to the ceiling, to the sky', delay: 2500 },
    { text: 'You are giving nothing.', delay: 3000 },
    { text: 'You are empty handed.', delay: 3000 },
    {
      text: 'You are looking upwards at a 45 degree angle, you are looking over your shoulder, you are watching your back.',
      delay: 3000,
    },
    { text: "If you behave I will show you what's in the case.", delay: 3000 },
    {
      text: 'A variety of stolen goods and materials for making other materials actually.',
      delay: 3000,
    },
    { text: "There's not a whole lot in there.", delay: 3000 },
    { text: 'Better not to open it.', delay: 3000 },
    { text: 'And protect it anyhow.', delay: 3000 },
    { text: 'Keep it close.', delay: 3000 },
    { text: 'Clutch it tightly.', delay: 3000 },
    { text: "Don't wanna show too much off.", delay: 3000 },
    { text: "I'm tempted but I'll hold out a little longer.", delay: 3000 },
    { text: 'Could always hold out a little bit longer.', delay: 3000 },
  ];


  const currentSequence = [
    sequence[currentStep]?.text,
    sequence[currentStep]?.delay,
  ];

    // Handle click to go to the next sequence step
    const handleClick = () => {
      if (currentStep < sequence.length - 1) {
        setCurrentStep(currentStep + 1); // Move to the next step
      }
    };
  
  
  useEffect(() => {
    console.log(useEffect)
    // Define the sequence of text and pauses (in milliseconds)
 
  // Get the current sequence based on the current step



    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);

     // Cleanup event listeners on unmount
     return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  
  }, [currentStep])
 
  return (
    <div className="absolute z-1 text-left px-8 md:px-32 py-12 font-serif w-full max-w-[700px] bottom-0 ">
      <TypeAnimation
        wrapper="span"
        omitDeletionAnimation={true}
        key={currentStep}
        sequence={currentSequence}
        speed={50}
        repeat={0}
        cursor={true}
        preRenderFirstString={false}
        style={{
          fontSize: '4em',
          display: 'inline-block',
          color: 'yellow',
          fontSize: '20px',
        }}
      />
    </div>
  );
};

export default Intro;
