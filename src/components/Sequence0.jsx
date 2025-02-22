'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Sequence0 = () => {
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current line

  const sequence = [
    { text: 'Press space to continue.', delay: 3000 },
    {
      text: 'This is a game and the rules are simple. Two players per team, and they must help transport our precious cargo from the past into the future.',
      delay: 3000,
    },
    {
      text: 'The briefcase is a time capsule, it is our dear inventory full of relics.',
      delay: 2000,
    },
    {
      text: 'It is the sum of a moment in time represented by the possessions of its contributors.',
      delay: 2500,
    },
    {
      text: 'It is freight waiting to be moved to its final destination.',
      delay: 3000,
    },
    {
      text: 'A long time ago it would have been sufficient to bury it in the ground and call it a day. But now urban development moves too quickly and the ground is constantly dug up and overturned and then dug up all over again.',
      delay: 3000,
    },
    {
      text: "We have therefore entrusted our precious cargo with willing participants, people to look after it and take responsibility for its safety.",
      delay: 3000,
    },
    {
      text: "We hire real people so that there's someone to take the fall if anything goes wrong.",
      delay: 3000,
    },
    {
      text: 'You can play too, but first you need a partner, someone you trust as a fellow smuggler.',
      delay: 3000,
    },
    {
      text: 'Because this is a pas de deux. Because the world was built for two. But also because one person can’t look in multiple directions at the same time.',
      delay: 3000,
    },
    {
      text: 'So protect the cargo at all costs and don’t take from it until the time is right.',
      delay: 3000,
    },
    {
      text: 'You do not yet understand why its contents are illegal but you will in one hundred years time.',
      delay: 3000,
    },
    {
      text: 'Besides, by the time you enter the game you might not even know what’s inside of it. Most of the players never will, they devote themselves to our mission with blind faith.',
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
    <div className="text-[white]">
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
          <Link href="/seventyeighth">
            <span className="relative z-1">6 degrees of separation</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sequence0;
