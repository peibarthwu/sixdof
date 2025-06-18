'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Interlude = () => {
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current line

  const sequence = [
    { text: 'Press space to continue.', delay: 3000 },
    {
      text: 'IT COMES WITH NO FUSS AND IT LEAVES WITH NO SOUND© ',
      delay: 3000,
    },
    {
      text: 'Souped-up van, 600 horsepower engine, Six Hundred Horses. Luminescent paint in a dirty shade of white that reflects blue. The scanning vehicle is operated from the inside by two men, who both possess a layer of',
      delay: 2000,
    },
    {
      text: 'SLIGHTLY BUMBLING IDIOCY OVER A LAYER OF TACTICAL PRECISION CONTROL.',
      delay: 2500,
    },
    {
      text: 'Or maybe it’s the other way around, it’s hard to tell.',
      delay: 3000,
    },
    {
      text: 'Sleeper builds. From the American South, maybe.',
      delay: 3000,
    },
    {
      text: 'That’s my guess, having seen them once or twice. White shirts and synthetic driving gloves.  Steering wheel coated in dark red leather, saddle-stitched with waxed thread like it’s for an equestrian.',
      delay: 3000,
    },
    {
      text: 'Do you know about the man who built his business on the strength of a stitch that could only be done by hand?',
      delay: 3000,
    },
    { text: 'The men with the reins wake up every morning at 6:30AM and take the van up the city streets, collecting every inch of it for a map on the World Wide Web. They work fast and think slow. And it is not immediately clear to me what stake they have in the whole affair but they are always punctual.', delay: 3000 },
  ];

  const currentSequence = [
    sequence[currentStep]?.text,
    sequence[currentStep]?.delay,
  ];

  // Handle click to go to the next sequence step
  const handleClick = (e) => {
    if (e.code === 'Space') {
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
    // document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    document.addEventListener('touchstart', handleTouch);
    console.log("hello")
    // Cleanup event listeners on unmount
    return () => {
      //   document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
      document.removeEventListener('touchstart', handleTouch);
    };
  }, [currentStep]);

  return (
    <div className="text-[red]">
      {currentStep < sequence.length ? (
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
            display: 'inline-block',
            color: 'white',
            paddingRight: '2px',
          }}
        />
      ) : (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Link href="/seventysixth">
            <span className="absolute z-1 rotate-90 origin-center ml-[10px] -mt-[5px]">
              6 degrees of freedom
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Interlude;
