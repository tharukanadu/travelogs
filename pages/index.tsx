import React, { useState } from 'react'
import Navbar from '@/Components/Healper/Navbar'
import MobileNav from '@/Components/Healper/MobileNav'
import Hero from '@/Components/Healper/Hero'
import TopDestination from '@/Components/Healper/TopDestination'
import Hotels from '@/Components/Healper/Hotels'
import Reviews from '@/Components/Healper/reviews'
import Contact from '@/Components/Healper/Contact'
import Footer from '@/Components/Healper/Footer'

const HomePage = () => {

  const [nav,setNav] = useState(false);
  const openNavHandler=()=> setNav(true);
  const closeNavHandler =() => setNav(false);
  return (
    <div className='overflow-x-hidden'>
      <MobileNav nav={nav} closeNav={closeNavHandler}/>
      <Navbar openNav={openNavHandler}/>
      <Hero/>
      <TopDestination/>
      <Hotels/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage