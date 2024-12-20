"use client";

import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Sequence2 = () => {
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current line
  const audio = useRef(null);

  const sequence = [
    { text: "Press space to enable audio and continue.", delay: 3000 },
    {
      text: "Connection levels registering",
      delay: 3000,
    },
    {
      text: "Stop",
      delay: 3000,
    },
    {
      text: "Highly probable, but not guaranteed, that most messages will go through.",
      delay: 2500,
    },
    {
      text: "Stop",
      delay: 3000,
    },
    {
      text: ".... . / .... .- ... / .- / -.-. --- .-.. .-.. . -.-. - .. --- -. / --- ..-. / .- .-. - .. ..-. .- -.-. - ... / --- ..-. / .. -. -.-. .-. . -.. .. -... .-.. -.-- / .... .. --. .... / ...- .- .-.. ..- . / ... .-.. ..- -. --. / --- ...- . .-. / .... .. ... / ... .... --- ..- .-.. -.. . .-.",
      delay: 2000,
    },
    {
      text: "Full stop",
      delay: 3000,
    },
    {
      text: "Things from antiquity nestled nicely in those little packing peanuts.",
      delay: 2000,
    },
    {
      text: "His job is to be light on his feet but heavy-handed and fix things before you notice that they have broken.",
      delay: 2000,
    },
    {
      text: "He doesn't seem very good at it but he tries really hard.",
      delay: 2000,
    },
    { text: "Quite a lot of weight on his shoulders, you see.", delay: 2000 },
    {
      text: "Anyways so he's doing all of that while I'm predicting the future.",
      delay: 2000,
    },
    {
      text: "I have a 2mm gold bracelet around my ankle – an anklet as they say – and my eyes on the ground.",
      delay: 2000,
    },
    {
      text: "...and the tag on my shirt's sticking out and it says PRACTICAL JOKE...",
      delay: 2000,
    },
    {
      text: "and you can't see my face but I am smiling very politely down here.",
      delay: 2000,
    }
  ];

  const currentSequence = [
    sequence[currentStep]?.text,
    sequence[currentStep]?.delay,
  ];

  // Handle click to go to the next sequence step
  const handleClick = (e) => {
    if (e.code === "Space") {
      if (currentStep < sequence.length - 1) {
        setCurrentStep(currentStep + 1); // Move to the next step
      }
    }
  };

  const handleTouch = (e) => {
    if (currentStep < sequence.length - 1) {
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
      document.addEventListener("touchstart", handleTouch);
    };
  }, [currentStep]);

  return (
    <div className="absolute z-1 text-left mx-8 pl-2 md:mx-32 my-12 w-git bg-[#ffffff88] backdrop-blur-sm max-w-[700px] bottom-0 ">
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
          fontSize: "4em",
          display: "inline-block",
          color: "black",
          fontSize: "20px",
        }}
      />
      <audio src="/seventyeighth.mp3" ref={audio} />
    </div>
  );
};

export default Sequence2;
