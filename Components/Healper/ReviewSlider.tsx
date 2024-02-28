import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


function ReviewSlider() {
  return (
   <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} infinite responsive={responsive} itemClass='item'>
    <ClientReview image='https://st2.depositphotos.com/1001094/7724/i/950/depositphotos_77243240-stock-photo-portrait-of-young-handsome-man.jpg' name='Joe Root'/>
    <ClientReview image='https://th.bing.com/th/id/OIP.7LzANLncn-x_CCM5t0qy4QHaHa?w=800&h=800&rs=1&pid=ImgDetMain' name='alia seal'/>
    <ClientReview image='https://gowlingwlg.com/getmedia/0780cc83-8a90-4f8c-a2a3-bfa3648883a5/kasia-donovan.jpg.xml?width=800&height=800&ext=.jpg' name='sheena oli'/>
    <ClientReview image='https://th.bing.com/th/id/OIP.vjMg4OTv7MCvJWPbwtOriAHaHa?rs=1&pid=ImgDetMain' name='henri faker'/>
    <ClientReview image='https://th.bing.com/th/id/R.b5b3f614e74bc0bf117b6e20e9cf81aa?rik=3gYyYxPao%2bs6OQ&pid=ImgRaw&r=0' name='joje lol'/>
   </Carousel> 
  )
}

export default ReviewSlider
