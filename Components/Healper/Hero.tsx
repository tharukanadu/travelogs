import React from 'react'
import SearchBox from './SearchBox'

function Hero() {
  return (
    <div className='relative w-[100%] h-[88vh]'>
      <div>
        <div className='absolute top-0 left-0 w-[100%] ng-blue-800 opacity-50'> </div>
        <img src="https://lonemind.com/wp-content/uploads/2020/09/5aa2ea02a4f4ac1a008b462f-1024x512.jpg" alt="" className='w-[100%] h-[100%] object-cover'/>
         </div>
        <div className='absolute z-[100] w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <div className='flex items-center justify-center flex-col w-[100%] h-[100%]'>
            <div>
              <h1 className='text-[25px] mb-[1rem] md:mb-[0] text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase '>Lets Enjoy The Journy</h1>
              <p className='md:text-[16px] text-center text-18px text-white font-normal [word-spacing:5px]'>get the best price on 2,000,000+ properties,worldwide</p>
            </div>
            {/* search */}
            <SearchBox/>
            <a href="#" className='rounded px-14 md:px-28 mt-[-1rem] py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white  hover:right-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300'>
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"> </span>
              <span className='relative font-bold'>Search</span>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Hero
