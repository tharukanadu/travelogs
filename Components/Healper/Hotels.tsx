import React from 'react'
import HotelCard from './HotelCard'

function Hotels() {
  return (
    <div className='pt-[5rem] bg-gray-200 pb-[4rem] '>
        <h1 className='heading'>Best Hotel</h1>
        <div className='grid grid-cols-1 md:grid-co2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]'>
            <div>
               <HotelCard name='hotel Nextum' city='Rajasthan' price='$175' reviewNum='26' image='https://www.yonder.fr/sites/default/files/contenu/destinations/05-the-oberoi-rajvilas-jaipur-rajasthan-02-.jpg'/> 
            </div>
            <div>
               <HotelCard name='hotel W Hotel' city='Melba' price='$526' reviewNum='41' image='https://th.bing.com/th/id/OIP.trZyYM11Rt_OHEl_1cL24wHaEK?rs=1&pid=ImgDetMain'/> 
            </div>
            <div>
               <HotelCard name='hotel Ahwahnee ' city='Tokyo' price='$126' reviewNum='157' image='https://th.bing.com/th/id/OIP.vQiZXX4ZmIATnh4TU_c1sAHaEJ?rs=1&pid=ImgDetMain'/> 
            </div>
            <div>
               <HotelCard name='hotel Rosewood ' city='new york' price='$226' reviewNum='146' image='https://th.bing.com/th/id/OIP.fnSsoZWmmHHhuzvH4pS7_AHaFj?rs=1&pid=ImgDetMain'/> 
            </div>
            <div>
               <HotelCard name='hotel DuPont Plaza' city='Nawadilli' price='$196' reviewNum='66' image='https://3.bp.blogspot.com/-OwoI6OESLME/W0hJYaBlUCI/AAAAAAAAEhg/lnKaNSDkssce5bJ0CEhCRAA6M5T-7JvvACLcBGAs/s1600/Hotels%2Bnear%2Baerocity.jpg'/> 
            </div>
            <div>
               <HotelCard name='hotel Nextum' city='Ottawa' price='$226' reviewNum='50' image='https://media.cntraveler.com/photos/59e4c7bf06aef90bf9358742/master/w_1200,c_limit/Pool-NamaleResort&Spa-Fiji-CRHotel.jpg'/> 
            </div>
        </div>
    </div>
  )
}

export default Hotels
