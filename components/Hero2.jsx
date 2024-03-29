"use client"
import React ,{useEffect,useRef} from 'react'
import Link from "next/link"
import Cta from '../pages/Sections/Cta';
import { useSession } from 'next-auth/react';

const AboutSec = () => {

  const exampleDiv = useRef(null);
  const {data: session} = useSession();

  return (
    <div className=''>
      <section className='h-auto '>
        <div className="pt-12 max-md:pt-5">
          <h1  className="max-sm:text-5xl text-7xl my-2 font-extrabold text-center">
           Welcome to SuperSevenAI
          </h1>
        </div>
        <div ref={exampleDiv}
          className="flex h-[650px] max-md:h-auto max-md:p-3 -z-10 w-3/4 justify-center mx-auto rounded-[50px] p-12 items-center border-2 my-12 border-gray-500/30 hover:border-gray-500/50 transition-colors delay-75">
              <img id="sticky" src='/img/hero1.jpg' className="w-full h-full rounded-[40px] max-md:rounded-[35px]" alt=""/>
        </div>
      </section>

      <Cta />
    </div>
  )
}

export default AboutSec