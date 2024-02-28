import React from 'react'

function Contact() {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
            <div>
                <img src="https://th.bing.com/th/id/R.1e9d55e5ea0d5592ccf21b5f7362cdc7?rik=zQdyghEXD7qzkQ&pid=ImgRaw&r=0" alt="fly" width={600} height={400} className='object-contain  mx-auto p-[1rem] '/>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-center justify-center w-[90%]xl:w-[70%] tracking-[0.1rem] mx-auto font-bold text-[20px] md:text-[30px] text-black'>Get special offers and more from traveler </h1>
                <p className='mt-[0.7rem] w-[80%] xl:w-[60%] mx-auto text-center text-[15px] text-black  opacity-70'>Suscribe to see the secret deals prices drop the momment you sign up</p>
                <div className="flex mt-[1.4rem] rounded-lg bg-gray-300 mb-[3rem] items-center space-x-2 w-[80%] h-[4vh] md:h-[6.3vh]">
                  <input className="ml-[1rem] bg-transparent w-[80%] h-[100%] border-none outline-none " type="email" placeholder='email' />
                  <button className='ml-[1rem] px-4 py-2  bg-blue-600 text-white font-bold rounded-lg h-[100%]'>Suscribe</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
