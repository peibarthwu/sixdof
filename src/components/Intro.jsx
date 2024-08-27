"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

const Intro = () => {
  return (
    <div className="absolute z-1 text-left px-8 md:px-32 py-12 font-serif w-full max-w-[700px] bottom-0 ">
      <TypeAnimation
        preRenderFirstString={false}
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Your hands are open",
          3000,
          "Your fingers are splayed",
          2000,
          "Your palms are to the ceiling, to the sky",
          2000,
          "You are giving nothing.",
          2000,
          "You are empty handed.",
          2000,
          "You are looking upwards at a 45 degree angle, you are looking over your shoulder, you are watching your back, you are watching hers.",
          2000,
          "You have a whistle around you neck and the ref SAYS THERES NO TIME OUT WHISTLEBLOWER.",
          2000,
          "If you behave I will show you what's in the case.",
          2000,
          "A variety of stolen goods and materials for making other materials actually.",
          2000,
          "There's not a whole lot in there.",
          4000,
          "Better not to open it.",
          1000,
          "And protect it anyhow.",
          1000,
          "Keep it close.",
          1000,
          "Clutch it tightly.",
          1000,
          "Don't wanna show too much off.",
          2000,
          `I'm tempted but I'll hold out a little longer.`,
          2000,
          "Could always hold out a little bit longer.",
          3000,
        ]}
        wrapper="span"
        omitDeletionAnimation={true}
        speed={200}
        style={{
          fontSize: "4em",
          display: "inline-block",
          color: "yellow",
          fontSize: "20px",
        }}
      />
    </div>
  );
};

export default Intro;
