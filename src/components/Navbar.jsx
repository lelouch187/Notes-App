import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
   <nav className="flex flex-wrap items-center justify-left p-4 bg-white">
   <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
       <h1 className="text-xl font-semibold text-gray-800 font-heading">
           Note App
       </h1>
   </div>
      <div className="w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
       <Link className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" to='/'>
           Главная
       </Link>
       <Link className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" to='/about'>
           Информация
       </Link>
   </div>
</nav>
  )
}
