import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-[1600px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
      <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'>
     <h1 className='px-4 text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold'>The <span className='text-orange-500'>Best</span></h1>   
     
    <br/> <h1 className='px-4 text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold'> <span className='text-orange-500'>Foods </span>Delivered</h1>
      </div>
      <img className="w-full max-h-[500px] object-cover" src='https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="fo" />
    </div>
    </div>
  )
}

export default Banner
