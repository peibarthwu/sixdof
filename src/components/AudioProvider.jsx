"use client"; // Ensure this component is client-side

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";
import gsap from "gsap";

const AudioProvider = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [hasStarted, setHasStarted] = useState(false); // Track whether the first track has started
  const pathname = usePathname(); // Get the current pathname

  const audioRef = useRef(null);
  const triggerRef = useRef(null);
  const navRef = useRef(null);
  // Define a mapping of URL paths to audio tracks
  const trackMap = {
    "/": "/orchestra.mp3",
    "/seventysixth": "/seventysixth.mp3",
    "/seventyeighth": "/seventyeighth.mp3",
  };

  const [animationStarted, setAnimationStarted] = useState(false); // State to control the animation start

  useEffect(() => {
    if (animationStarted) {
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
    }
  }, [animationStarted]);

  // Function to trigger animation
  const handleButtonClick = () => {
    setAnimationStarted(true); // Start animation when button is clicked
  };

  const handleButtonPress = () => {
    if (!hasStarted) {
      const firstTrack = trackMap["/"]; // Get the first track
      const newAudio = new Audio(firstTrack); // Create a new Audio object
      audioRef.current = newAudio; // Store it in the ref
      newAudio.play(); // Start playing the first track
      setIsPlaying(true);
      setHasStarted(true); // Mark that the first track has started
      handleButtonClick();
      //start intro loop
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
    }

    if (navRef.current && animationStarted) {
      gsap.to(navRef.current, {
        opacity: pathname === "/" ? 1 : 0,
        duration: 1, // Fade duration
      });
    }

    return () => {
      if (audioRef.current) audioRef.current.pause(); // Cleanup on URL change
    };
  }, [pathname]); // Re-run the effect whenever the pathname changes

  return (
    <div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] text-center">
        <span data-intro className="absolute left-0 opacity-0 w-full">
          Six Degrees of Freedom
        </span>
        <span data-intro className="absolute left-0 opacity-0 w-full">
          by Pei Pei Barth Wu and Angelina Hoffman
        </span>
        <span data-intro className="absolute left-0 opacity-0 w-full">
          Music by Jack Whitescarver
        </span>
        <span data-intro className="absolute left-0 opacity-0 w-full">
          Performed by Sharleen Chidiac and Owen Prum
        </span>
        <span
          data-intro
          className="absolute left-0 opacity-0 w-full"
          ref={navRef}
        >
          <Link href="/seventysixth">
            <span className="absolute z-1 rotate-90 origin-center ml-[10px] -mt-[5px]">
              6 degrees of freedom
            </span>
          </Link>
          <Link href="/seventyeighth">
            <span className="relative z-1">6 degrees of separation</span>
          </Link>
        </span>
      </div>
      <button
        data-trigger
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ref={triggerRef}
        onClick={handleButtonPress}
      >
        Enable audio to proceed
      </button>
      {audioRef.current && <p>{`Now Playing: ${pathname}`}</p>}
    </div>
  );
};

export default AudioProvider;
