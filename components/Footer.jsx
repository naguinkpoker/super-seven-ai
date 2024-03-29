import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<footer className="text-gray-600 body-font">
  <div className="container px-12 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Link href="/" title='SuperSeven' className="flex text-center justify-center"> 
                        {/* <span className="text-transparent text-2xl font-mono text-center flex justify-center bg-clip-text bg-gradient-to-l backdrop-blur-2xl from-pink-500 to-purple-500 ">
                      SuperSevenai
                    </span> */}
                    {/* <img src="/img/logo.png" className="invert dark:invert-0" width={50} alt="" /> */}
                    <span className="text-3xl mt-2 bg-gradient-to-l from-pink-500 to-purple-500 font-bold bg-clip-text text-transparent">
              SuperAI
            </span>
              </Link>    
            </div>
    <p className="text-sm text-zinc-500 dark:text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200/50 sm:py-2 sm:mt-0 mt-4">© 2024 SuperSeven —
      <a href="#" className="text-zinc-900 dark:text-gray-400 ml-1" rel="noopener noreferrer" target="_blank">@Nahuel Cabrera</a>
    </p>
  </div>
  <div className="text-center mb-2 ">
    <Link href="/privacyPolicy" className='active:text-pink-500 hover:text-pink-500 border-r-2  border-gray-500'>
    Privacy & Policy &nbsp;
    </Link>
    <Link href="/terms&Condition" className='active:text-pink-500 hover:text-pink-500'>
    &nbsp; Terms & Conditions
    </Link>
  </div>
</footer>  )
}

export default Footer