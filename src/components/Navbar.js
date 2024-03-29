import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose  } from "react-icons/ai";
import { FaCartShopping,FaWallet,FaTruck   } from "react-icons/fa6";
import { MdFavorite,MdHelp  } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
const Navbar = () => {
    const[nav,setnav]=useState(false)
  return (
    
      <div className='max-w-[1600px] mx-auto flex justify-between items-center p-4'>
       {/* let side of navbar */}
        <div className='flex items-center'>
            <div onClick={()=>setnav(!nav)} 
            className='cursor-pointer'>
             <AiOutlineMenu size={30}/>
            </div>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[10px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>PickUp</p>
            </div>
        </div>
   
   {/* search input  */}
   <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
   <AiOutlineSearch size={20}/>
   <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search...'/>
    </div>
   
   {/* cart button  */}
   <button className='bg-black text-white hidden md:flex items-center  p-2 rounded-full'>
    <FaCartShopping size={20} className='mr-2'/>Cart
   </button>
    
    {/* side bar  */}
     {nav ? <div className='bg-black/80 fixed w-full h-screen  z-10 top-0 left-0'></div>: ''}
  
    <div className={nav ?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10'}>
     <AiOutlineClose 
       onClick={()=>setnav(!nav)}
     size={25} className='absolute right-4 top-4 '/>
    <h2 className='text-2xl p-3'>
        Best <span className='font-bold'>Eats</span>
    </h2>
    <nav>
        <ul className='flex flex-col p-4 text-gray-700'>
            <li className='text-xl py-3 flex'><FaTruck size={25} className='mr-4'/>Orders</li>
            <li className='text-xl py-3 flex'><MdFavorite size={25} className='mr-4'/>Favourite</li>
            <li className='text-xl py-3 flex'><FaWallet size={25} className='mr-4'/>Wallets</li>
            <li className='text-xl py-3 flex'><MdHelp size={25} className='mr-4'/>Help</li>
            <li className='text-xl py-3 flex'><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
        </ul>
    </nav>
    </div>
    </div>
    
  )
}

export default Navbar
