import React from 'react'
import { categories } from '../data/Data'

const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1600px] m-auto px-4 py-12'>
      
        <h1 className='text-orange-500 font-bold text-4xl text-center '>Menu Items</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-4'>
            {
                categories.map((obj)=>(
                    <div key={obj.id} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                        <p className='font-bold sm:text-xl'>{obj.name}</p>
                        <img className='w-20' 
                        src={obj.image} alt={obj.name}/>
                    </div>
                    
                ))
            }
        </div>
      </div>
    
  )
}

export default Category
