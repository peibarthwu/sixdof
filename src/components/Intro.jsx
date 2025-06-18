"use client";

import React, { useEffect, useState } from "react";
import Link from 'next/link';

const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open modal on initial load
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="press h-screen fixed overflow-scroll inset-0 flex flex-col relative py-16">
      <div className="w-fit mx-auto">
        <h1 className="font-bold text-4xl text-center text-[red]">
          The Fall of the Boolean
        </h1>
        <ul className="max-w-[600px] flex flex-col gap-8">
          <li className="bg-[yellow] font-bold text-black">
            IT COMES WITH NO FUSS AND IT LEAVES WITH NO SOUND© Souped-up van, 600
            horsepower engine, Six Hundred Horses. Luminescent paint in a dirty
            shade of white that reflects blue. The scanning vehicle is operated
            from the inside by two men, who both possess a layer of SLIGHTLY
            BUMBLING IDIOCY OVER A LAYER OF TACTICAL PRECISION CONTROL. Or maybe
            it’s the other way around, it’s hard to tell. Sleeper builds. From the
            American South, maybe. That’s my guess, having seen them once or
            twice. White shirts and synthetic driving gloves. Steering wheel
            coated in dark red leather, saddle-stitched with waxed thread like
            it’s for an equestrian. Do you know about the man who built his
            business on the strength of a stitch that could only be done by hand?
          </li>
          {/* <li>
          <img
            className="w-[300px]"
            src="/scene1.jpeg"
          
          />
          </li> */}
        
          <li className="text-white">
            Until its unsavory demise, the Boolean derived and maintained its
            value from Confidence in high class Institutional Legitimacy. That
            was… until a series of rather unfortunate and deliberately planned
            document leaks revealed otherwise, a.k.a. Not To Be Trusted. Legal
            Drama.
          </li>
          <li className="bg-[yellow] font-bold text-black">
            The men with the reins wake up every morning at 6:30AM and take the
            van up the city streets, collecting every inch of it for a map on the
            World Wide Web. They work fast and think slow. And it is not
            immediately clear to me what stake they have in the whole affair but
            they are always punctual. In fact, they are also almost always late
            but just barely make it in on time, exposing an effort towards obeying
            the rules that makes you think that they probably do care abo
          </li>
          <li className="underline text-white  bg-[rgba(150,190,255,0.8)]">
            Do u believe in the existence of the occult? The supernatural? What
            about phantom teleportation? Bypassing time and space?
          </li>
          <li className="bg-[yellow] font-bold text-black">
            Do you want to open the case? Do you think you already know what’s
            inside? I’m just dying to know. I’m dying to rip it right out from his
            hands, release the latches, let the contents fall to the concrete. The
            last remaining Boolean coin, on or off, true or false, heads or tails,
            worth either something or nothing at all, packed tightly in synthetic
            packing peanuts. So I imagine.
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center flex-1 sticky top-0">
      <Link href="/seventysixth">
        <h1 className="font-bold text-3xl text-center text-[blue] underline">
          Beyond
        </h1>
        </Link>
      </div>
      {isOpen && (
        <div className="bg-[rgba(255,255,255,0.5)] fixed w-screen inset-0 h-screen flex justify-center items-center">
          <div className="p-2 bg-gray-200 text-black w-[400px] min-h-[300px] relative flex items-center">
            <button
              className="bg-gray-100 absolute top-4 right-4 px-2"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <p>
              Unfortunately, due to a relatively minor dispute that snowballed
              into a major loss of confidence in The Issuing Party (IP),{" "}
              <br></br>
              <span className="text-[blue]">
                THE BOOLEAN HAS AT LONG LAST JOINED THE List of MODERN OBSOLETE
                CURRENCIES!!!!{" "}
              </span>
              <br></br>In the esteemed company of: 2 ½ cents.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
