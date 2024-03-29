import Head from 'next/head'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {HiOutlineExternalLink} from 'react-icons/hi'
import { FaLocationDot } from 'react-icons/fa6'
import Header from '../components/Header';
import Footer from '../components/Footer';
const About = () => {

  return (
    <div className='h-auto'>
      <Head>
        <title>About Us | SuperSevenAI</title>
      </Head>
      <Header/>
        <>
          <h1 className="text-center text-4xl pt-6 font-bold tracking-wider">
            About <span className='bg-clip-text text-transparent bg-gradient-to-tr from-purple-600 to-pink-600'>SuperSeven</span> 
          </h1>
          <h2 className='text-center text-3xl pt-10 font-semibold'>How it all started</h2>
          <div className="w-full mx-auto flex pt-3">
            <span className="text-center w-20 h-1.5 rounded-full bg-gradient-to-tr from-purple-900 via-purple-500 to-pink-600 mx-auto"></span>
          </div>
        </>
        {/* Started Section */}
        <div className="w-full ax-md:text-center px-28 text-lg mt-5 flex max-md:block max-sm:px-7 h-auto">
          <div className="w-1/2 pr-3 max-md:w-full">
            <h1 className="font-semibold tracking-wide py-3 first-letter:text-3xl">
            <span className='text-purple-500 font-bold'>SuperAI</span> was born from a shared passion for harnessing the power of artificial intelligence to drive innovation and solve complex 
          challenges.
            </h1>
          Our journey began when our co-founders ,
          Nahuel Cabrera
          &nbsp;and Alex Bill, both experienced professionals in the field of AI, crossed
          paths at a technology conference. They shared a vision of making AI accessible and beneficial to businesses and individuals alike. 
          Inspired by the transformative potential of AI, they decided to combine their expertise and create SuperAI. The company's 
          inception was marked by countless hours of research, development, and collaboration, all fueled by the desire to 
          push the boundaries of what AI could achieve. From those early days, SuperAI has grown into a leading force in the
            AI industry, committed to delivering cutting-edge solutions and driving the future of artificial intelligence.
          </div>
          <div className="w-1/2 pl-3 mt-28 max-md:mt-5 max-md:w-full">
            <p className=''>SuperSeven is a platform that allows students to solve programming problems in an interactive way, with the help of our mentors and experienced program
              </p>
              <p><span className='text-purple-500 font-bold'>SuperSevenAI</span>, is a platform that helps you to learn
              programming languages, and also help you in building your projects.</p>
              <p>We have created this website for the sole purpose of helping people who are new to coding or just want to brush up their skills by learning
              </p>  
          </div>
        </div>
      <Footer />
      </div>
  )
}

export default About