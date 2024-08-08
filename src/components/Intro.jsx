"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";


const Intro = () => {
  useEffect(() => {
    console.log("in useEffect");
  });
  return (
    <div className="absolute z-1 text-left w-screen px-32 py-12 font-serif w-[700px] bottom-0">
       <TypeAnimation
      preRenderFirstString={false}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Your hands are open",
        3000, 
        "Your fingers are splayed",
        1500, 
        "Your palms are to the ceiling, to the sky",
        1500, 
        "You are giving nothing",
        1500, 
        "You are empty handed",
        1500, 
        "You are looking upwards at a 45 degree angle, you are looking over your shoulder, you are watching your back.",
        1000,
        "Your tag's sticking out. It says PRACTICAL JOKE, it says CHARISMA.",
        1000,
      ]}
      wrapper="span"
      omitDeletionAnimation={true}
      speed={200}
      style={{ fontSize: "4em", display: "inline-block", color: "yellow", fontSize: "32px" }}
    />
    </div>
   
  );
};

export default Intro;
