import React from 'react'
import Link from 'next/link'
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from './ui/moving-border';


function HeroSection() {
  return (
    <div className='md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="-top-30 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1
        className="mt-32 md:mt-0md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-8xl"
        >Master The Art Of Music</h1>
        <p
        className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >Mastering the art of music is an intricate journey that intertwines skill, emotion, and creativity. It requires not only technical proficiency but also a deep understanding of harmony, melody, and rhythm.</p>
        <div className="mt-12">
           <Button
            borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
           >
           <Link href={"/courses"}>Explore Courses</Link>
           </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
