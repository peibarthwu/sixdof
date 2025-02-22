"use client"; // Ensure this component is client-side

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";
import gsap from "gsap";
import Sequence0 from "./Sequence0";
import Intro from "./Intro";

const AudioProvider = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Track whether the first track has started
  const pathname = usePathname(); // Get the current pathname

  const audioRef = useRef(null);
  const triggerRef = useRef(null);
  const navRef = useRef(null);
  // Define a mapping of URL paths to audio tracks
  const trackMap = {
    "/": "/seventyeighth.mp3",
    "/seventysixth": "/seventysixth.mp3",
    "/seventyeighth": "/bees.m4a",
  };

  const [animationStarted, setAnimationStarted] = useState(false); // State to control the animation start

  useEffect(() => {
    if (pathname === "/" && animationStarted) {
      // GSAP Timeline for animating spans when animation is triggered
      const tl = gsap.timeline({
        onComplete: () => {
          animEls.forEach((el, index) => {
            if (index + 1 < animEls.length) {
              el.remove();
            }
          });
        },
      });
      tl.to(triggerRef.current, {
        opacity: 0, // Fade in
        duration: 2,
        onComplete: () => {
          triggerRef.current.remove();
        },
      });

      const animEls = document.querySelectorAll("span[data-intro]");
      animEls.forEach((el, index) => {
        // Fade in the current span
        tl.to(el, {
          opacity: 1, // Fade in
          duration: 2, // Fade duration
          delay: 1, // Delay each fade-in by 3 seconds (staggered start)
        }).to(el, {
          opacity: index + 1 === animEls.length ? 1 : 0, // Fade out after fade-in
          duration: 1, // Fade duration
          delay: 1, // Delay fade-out a bit after fade-in
        });
      });
    }  else if (animationStarted) { //starting on detail page edge case
        if(pathname !== "/") {
            gsap.to(triggerRef.current, {
                 opacity: 0, // Fade in
                 duration: 2,
                 onComplete: () => {
                   triggerRef.current.remove();
                 },
               });
         }

    }
  }, [animationStarted]);

  // Function to trigger animation
  const handleButtonClick = () => {
    setAnimationStarted(true); // Start animation when button is clicked
  };

  const handleButtonPress = () => {
    if (!hasStarted) {
      const firstTrack = trackMap[pathname]; // Get the first track
      const newAudio = new Audio(firstTrack); // Create a new Audio object
      audioRef.current = newAudio; // Store it in the ref
      newAudio.play(); // Start playing the first track
      setIsPlaying(true);
      setHasStarted(true); // Mark that the first track has started
      handleButtonClick();
    } 
  };

  useEffect(() => {
    if (pathname !== "/" && audioRef.current) {
      // Cleanup the previous audio when the pathname changes (unless it's the first track)
      audioRef.current.pause();
      const track = trackMap[pathname]; // Get the track based on the current pathname
      if (track) {
        const newAudio = new Audio(track); // Create a new Audio object
        audioRef.current = newAudio; // Store it in the ref
        newAudio.play(); // Start playing the new track
        setIsPlaying(true);

        newAudio.onended = () => setIsPlaying(false); // Reset play state when track ends
      }
    } else if (pathname === "/" && animationStarted){
        audioRef.current.pause();
        const track = "/lynch.m4a"; // Get the track based on the current pathname
        if (track) {
          const newAudio = new Audio(track); // Create a new Audio object
          audioRef.current = newAudio; // Store it in the ref
          newAudio.play(); // Start playing the new track
          setIsPlaying(true);
  
          newAudio.onended = () => setIsPlaying(false); // Reset play state when track ends
        }
    }

    if (navRef.current && animationStarted) {
      gsap.to(navRef.current, {
        opacity: pathname === "/" ? 1 : 0,
        duration: 1, // Fade duration
        pointerEvents:  pathname === "/" ? "auto" : "none", // Fade duration
      });
    }

    return () => {
      if (audioRef.current) audioRef.current.pause(); // Cleanup on URL change
    };
  }, [pathname]); // Re-run the effect whenever the pathname changes

  return (
    <div>

      {/* {introActive && <Intro />} */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] text-center">
        <span data-intro className="absolute left-0 opacity-0 w-full">
          Six Degrees of Freedom
        </span>
        <span data-intro className="absolute left-0 opacity-0 w-full">
          choreographed by Pei Pei Barth Wu and Angelina Hoffman
        </span>
        <span
          data-intro
          className="left-0 opacity-0 w-full text-left"
          ref={navRef}
        >
          <Sequence0/>
        </span>
      </div>
      
      <button
        data-trigger
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ref={triggerRef}
        onClick={handleButtonPress}
      >
        Enter
      </button>
      {audioRef.current && <p>{`Now Playing: ${pathname}`}</p>}
    </div>
  );
};

export default AudioProvider;
