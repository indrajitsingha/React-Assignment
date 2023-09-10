import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header
    class="  w-[100%] max-w-[100%] bg-purple-800 py-3 shadow backdrop-blur-lg md:top-6  lg:max-w-[100%]">
    <div class="px-4">
        <div class="flex items-center justify-center ">
         
            <div class="flex md:items-center md:justify-center md:gap-5">
                <Link aria-current="page"
                    class="inline-block rounded-lg px-2 py-1 font-serif  text-2xl font-bold  transition-all duration-200  text-white hover:bg-gray-100 hover:text-gray-900"
                    to="/">Products</Link>
             
            </div>
            
        </div>
    </div>
</header>
  )
}

export default Navbar