import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false)

 const toggleMenu = () => {
  setMenuOpen(!menuOpen)
 }

 const closeMenu = () => {
  setMenuOpen(false)
 }
  
  return (
    <nav className="bg-slate-50 p-2 fixed top-0 w-full z-10 font-quicksand ">
      <div className=' flex justify-between md:flex md:justify-between items-center'>
        <h1 className='text-pPurple'>Dos Anjos</h1>
        <ul className='hidden md:flex md:justify-center' >
          <li className="mx-4"><a className="text-pPurple hover:text-gray-300" href="#home">Home</a></li>
          <li className="mx-4"><a className="text-pPurple hover:text-gray-300" href="#projects">Projects</a></li>
          <li className="mx-4"><a className="text-pPurple hover:text-gray-300" href="#aboutMe">About Me</a></li>
          <li className="mx-4"><a className="text-pPurple hover:text-gray-300" href="#contact">Contact</a></li>
        </ul>
        <button type='button' onClick={toggleMenu} className='md:hidden'>
          {menuOpen ? (
            <IoCloseOutline className='text-xl'/>
          ): (
            <CiMenuBurger className="text-xl"/>
          )}
        </button>
      </div>

      <ul className={`font-montserrat md:hidden ${menuOpen ? "flex flex-col items-center h-screen" : "hidden"}`}>
        <li className="my-8" onClick={closeMenu}><a className="text-pPurple hover:text-gray-300" href="#home">Home</a></li>
        <li className="my-8" onClick={closeMenu}><a className="text-pPurple hover:text-gray-300" href="#projects">Projects</a></li>
        <li className="my-8" onClick={closeMenu}><a className="text-pPurple hover:text-gray-300" href="#aboutMe">About Me</a></li>
        <li className="my-8" onClick={closeMenu}><a className="text-pPurple hover:text-gray-300" href="#contact">Contact</a></li>
      </ul>

      
    </nav>
  )
}

export default Navbar
