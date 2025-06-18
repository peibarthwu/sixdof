"use client";

import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Sequence2 = () => {
  const [currentStep, setCurrentStep] = useState(0); // Tracks the current line

  const sequence = [
    { text: "Press space to continue.", delay: 3000 },
    {
      text: "Events will continue to proceed regardless.",
      delay: 3000,
    },
    {
      text: ".... . / .... .- ... / .- / -.-. --- .-.. .-.. . -.-. - .. --- -. / --- ..-. / .- .-. - .. ..-. .- -.-. - ... / --- ..-. / .. -. -.-. .-. . -.. .. -... .-.. -.-- / .... .. --. .... / ...- .- .-.. ..- . / ... .-.. ..- -. --. / --- ...- . .-. / .... .. ... / ... .... --- ..- .-.. -.. . .-.",
      delay: 2000,
    },
    {
      text: "Things from antiquity nestled nicely in those little packing peanuts.",
      delay: 2000,
    },
    {
      text: "Other things too, things of incredibly high value in that briefcase.",
      delay: 2000,
    },
    {
      text: "And I’d love to be more specific but I’ve been sworn to secrecy.",
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
    {
      text: "And when he makes a little mistake he gets sorta despondent.",
      delay: 2000,
    },
    {
      text: "Quite a lot of weight on his shoulders, you see.",
      delay: 2000,
    },
    {
      text: "Anyways so he's doing all of that while I'm predicting the future in this adorable chocolate brown leather pocket calendar.",
      delay: 2000,
    },
    {
      text: "Sometimes my predictions come true and I have to act surprised.",
      delay: 2000,
    },
    {
      text: "But mostly they don’t and I’m kind of disappointed.",
      delay: 2000,
    },
    {
      text: "He is wearing the same blue shirt that everyone else is wearing and trousers. Worn in loafers. Belt. Two of those cheap little gold locks from the hardware store as cufflinks. Refusal to roll his sleeves up for me.",
      delay: 2000,
    },
    {
      text: "I have a 2mm gold bracelet around my ankle – an anklet as they say – and my eyes on the ground.",
      delay: 2000,
    },
    {
      text: "and the tag on my shirt's sticking out and it says PRACTICAL JOKE",
      delay: 2000,
    },
    {
      text: "and the tag on his shirt's sticking out and it says CHARISMA",
      delay: 2000,
    },
    {
      text: "and I really wish he wore different pants.",
      delay: 2000,
    },
    {
      text: "and you can't see my face but I am smiling very politely down here.",
      delay: 2000,
    },
    // {
    //   text: "He doesn’t like drama so have to sneak it in small, tasteful amounts so it’s palatable enough for him. I’m fine with humiliation so I’m upside-down.",
    //   delay: 2000,
    // },
    // {
    //   text: "and you can't see my face but I am smiling very politely down here.",
    //   delay: 2000,
    // },
  ];

  const currentSequence = [
    sequence[currentStep]?.text,
    sequence[currentStep]?.delay,
  ];

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
    <div className="absolute z-1 text-left mx-8 pl-2 md:mx-32 my-12 w-fit bg-[#ffffff88] backdrop-blur-sm max-w-[700px] bottom-0 ">
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
            display: "inline-block",
            color: "black",
            backgroundColor: "red",
            fontSize: "20px",
            paddingRight: "2px",
          }}
        />
      ) : (
        // <Link href="/">
        //   <span className="relative z-1 text-[20px] !color-[black] pr-2">
        //     Return home
        //   </span>
        // </Link>
        <Link href="/the-men-with-the-reins">
          <span className="text-[blue] font-serif underline">
            Click to proceed
          </span>
        </Link>
      )}
    </div>
  );
};

export default Sequence2;
