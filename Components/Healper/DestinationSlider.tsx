import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function DestinationSlider() {
  return (
    <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} infinite responsive={responsive} itemClass='item' >
      <div>
        <img src="https://th.bing.com/th/id/OIP.N358PIg2BErU6IS4BqUARQHaE7?rs=1&pid=ImgDetMain" alt="destination" width={200} height={200} className='rounded-full mx-auto' />
        <h1 className='destination_h1'>Japan</h1>
        <p className='destination_p'>5 Hotel</p>
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp3598853.jpg" alt="destination" width={200} height={200} className='rounded-full mx-auto' />
        <h1 className='destination_h1'>New York</h1>
        <p className='destination_p'>18 Hotel</p>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain" alt="destination" width={200} height={200} className='rounded-full mx-auto' />
        <h1 className='destination_h1'>India</h1>
        <p className='destination_p'>27 Hotel</p>
      </div>
      <div>
        <img src="https://i.pinimg.com/originals/a1/d0/1b/a1d01b45271fb4de973af0ad9436dd7c.jpg" alt="destination" width={200} height={200} className='rounded-full mx-auto' />
        <h1 className='destination_h1'>Canada</h1>
        <p className='destination_p'>10 Hotel</p>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.XIbARqktZuJ2Vhp85BixvwHaEK?rs=1&pid=ImgDetMain" alt="destination" width={200} height={200} className='rounded-full mx-auto' />
        <h1 className='destination_h1'>Austalia</h1>
        <p className='destination_p'>7 Hotel</p>
      </div>
    </Carousel>
  )
}

export default DestinationSlider
