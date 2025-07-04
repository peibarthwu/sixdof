'use client';

import React, { useState, useRef, useEffect } from 'react';
import Intro from './Intro';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Sequence0 = () => {
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current line

  const sequence = [
    { text: 'Press space to continue.', delay: 3000 },
    {
      text: '[Driver 1]',
      delay: 3000,
    },
    {
      text: 'I swear to God, there are some things that you just can’t explain with normal quote unquote earthly logic. Because we took that van up and down every line of the city grid and I swear to you. I saw that same briefcase at least a dozen times.',
      delay: 2000,
    },
    {
      text: 'All those people in groupsa twos',
      delay: 3000,
    },
    {
      text: 'playing some sorta game that I just didn’t understand',
      delay: 3000,
    },
    {
      text: 'Movement in any direction is valid, so long as the briefcase moves forward through time.',
      delay: 3000,
    },
    { text: 'We seek to play the long game.', delay: 3000 },
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
    <div>
      {currentStep < sequence.length ? (
        <div className='fixed w-screen h-screen inset-0 flex justify-center items-center script'>
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
            color: 'black',
            maxWidth: '300px',
            paddingRight: '2px',
          }}
        />
        </div>
      ) : (
        <div className='script'>
          <Intro/>
        </div>
      )}
    </div>
  );
};

export default Sequence0;
