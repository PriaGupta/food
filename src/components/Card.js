import React from 'react'

const Card = () => {
  return (
    <div className='max-w-[1600px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl pt-4 px-2'>Sun's Out</p>
        <p className='px-2'>Through 8/26</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl py-1 px-1'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='bread'/>
    </div>

    <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl pt-4 px-2'>New Restaurent</p>
        <p className='px-2'>Added Daily</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl py-1 px-1'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='bread'/>
    
    </div>

    <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl pt-4 px-2'>Desserts</p>
        <p className='px-2'>Tasty Treat</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl py-1 px-1'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1594627882045-57465104050f?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='bread'/>
    </div>
    </div>
  )
}

export default Card
