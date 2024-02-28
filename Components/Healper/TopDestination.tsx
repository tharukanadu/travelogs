import React from 'react'
import DestinationSlider from './DestinationSlider'

function TopDestination() {
  return (
     <div className='mt-[6rem] mb-[4rem] '>
      <h1 className='heading'>Top destination</h1>
      <div className='mt-[4rem] w-[80%] mx-auto'>
        <DestinationSlider/>
      </div>
    </div>
  )
}

export default TopDestination
