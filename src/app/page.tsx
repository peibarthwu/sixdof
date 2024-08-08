import Image from "next/image";
import { Intro, ThreeScene } from "../components";

export default function Home() {
  return (
    <main className="text-[yellow] font-serif flex h-screen flex-col md:flex-row items-center justify-center">
      <div className="hidden md:flex  h-full w-full md:w-1/3 relative items-center justify-center hover:opacity-30 duration-300	">
        <Image
          className="absolute"
          src="/scene1.jpeg"
          alt="Scene 1. Woman in acrobatic position on the sidewalk resting upsidedown on man with briefcase over his shoulder."
          // width={300}
          // height={300}
          layout="fill"
          priority
          objectFit="cover"
        />
        <h1 className="relative z-1 ">Coming soon</h1>
      </div>
      <div className="text-yellow md:text-black z-1 absolute md:relative h-1/2 md:w-1/3  flex flex-col items-center justify-center text-center">
        <h1 className="relative z-1">6 degrees of freedom</h1>
        <h1 className="relative z-1">6 degrees of separation</h1>
        <h1 className="relative z-1">6 degrees of paranoia</h1>
        <h1 className="relative z-1">6 degrees of lust</h1>
        <h1 className="relative z-1">6 degrees of science fiction</h1>
        <h1 className="relative z-1">6 degrees of what you see is what you get</h1>
        <h1 className="relative z-1">6 degrees above freezing</h1>
        <h1 className="relative z-1">Too long, I didn't read it</h1>
        <h1 className="relative z-1">6 sides of the same coin</h1>
        <h1 className="relative z-1">At all costs protect the briefcase</h1>
      </div>
      <div className="hidden md:flex h-full w-full md:w-1/3 relative  items-center justify-center hover:opacity-30 hover:opacity-30 duration-300	">
        <Image
          className="absolute"
          src="/scene2_3.jpeg"
          alt="Scene 1. Woman in acrobatic position on the sidewalk resting upsidedown on man with briefcase over his shoulder."
          // width={300}
          // height={300}
          layout="fill"
          objectFit="cover"
          priority
        />
        <h1 className="relative z-1">Coming soon</h1>
      </div>
      <ThreeScene/>
    </main>
  );
}
