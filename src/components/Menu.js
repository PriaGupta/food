import React, { useState } from 'react'
import {data} from '../data/Data';

const Menu = () => {
    // console.log(data)
    const[food,setfood]=useState(data)

    // Filter on burger/etc 
    const filtertype=(category)=>{
        setfood(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    }

    // Filter on Price 
    const filterprice=(price)=>{
        setfood(
            data.filter((item)=>{
                return item.price === price;
            })
        )
    }
  return (
    <div className='max-w-[1600px] m-auto px-4 py-12'>
         <h1 className='text-orange-500 font-bold text-4xl text-center '>Top Rated Menu Items</h1>
         <div className='flex flex-col lg:flex-row justify-between'>
         <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap '>
                <button onClick={()=>setfood(data)} className='m-1 rounded-full bg-orange-600 hover:bg-orange-600 py-1 px-3 hover:text-white '>All</button>
                <button onClick={()=>filtertype('burger')} className='m-1 rounded-full bg-orange-600 hover:bg-orange-600 py-1 px-3 hover:text-white'>Burgers</button>
                <button onClick={()=>filtertype('pizza')}
                className='m-1 rounded-full bg-orange-600 hover:bg-orange-600 py-1 px-3 hover:text-white'>Pizza</button>
                <button onClick={()=>filtertype('salad')} className='m-1 rounded-full bg-orange-600 hover:bg-orange-600 py-1 px-3 hover:text-white'>Salads</button>
                <button onClick={()=>filtertype('chicken')} className='m-1 rounded-full bg-orange-600 hover:bg-orange-600 py-1 px-3 hover:text-white'>Chicken</button>
            </div>
            </div>   

            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[400px] w-full '>
                    <button onClick={()=>filterprice('$')} className='m-1 rounded-full bg-orange-600 hover:bg-orange-600 py-1 px-4 hover:text-white '>$</button>
                    <button onClick={()=>filterprice('$$')} className='m-1 rounded-full bg-orange-600  hover:bg-orange-600 py-1 px-3 hover:text-white '>$$</button>
                    <button onClick={()=>filterprice('$$$')} className='m-1 rounded-full bg-orange-600  hover:bg-orange-600 py-1 px-3 hover:text-white '>$$$</button>
                    <button onClick={()=>filterprice('$$$$')} className='m-1 rounded-full bg-orange-600 hover:bg-orange-600 py-1 px-3 hover:text-white '>$$$$</button>
                </div>
                </div>   
    </div>

    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {
           food.map((item)=>(
            <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name}
                className='w-full h-[250px] object-cover rounded-t-lg' />
                <div className='flex justify-between px-2 py-3'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-2 rounded-full' 
                        >{item.price}</span>
                    </p>
                </div>
            </div>

           ))
        }
    </div>
    </div>
  )
}

export default Menu
