"use client"

import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'
// import React from 'react'

const Navbar = ({ isDarkMode, setISDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false);

    // Creating menu to open and close using close icon
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll' , ()=>{
            if(window.scrollY > 50){
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>

      <nav className={`w-full fixed top-0 left-0 flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 transition-all duration-300 ${isScroll ? (isDarkMode ? "bg-gray-900/50 backdrop-blur-lg shadow-sm" : "bg-white/50 backdrop-blur-lg shadow-sm") : "bg-transparent" }`}>
        
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
        </a>

        <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : (isDarkMode ? "bg-gray-800/50 shadow-sm border border-white/20" : "bg-white shadow-sm bg-opacity-50")}`}>
            <li> <a href="#top" className={`font-Ovo ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Home</a></li>
            <li> <a href="#about" className={`font-Ovo ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>About me</a></li>
            <li> <a href="#work" className={`font-Ovo ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>My work</a></li>
            <li> <a href="#contact" className={`font-Ovo ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

            <button type="button" onClick={()=> setISDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer'/>
            </button>

            <a href='#contact' className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-colors ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-500 text-gray-700 hover:bg-gray-100'}`} >Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3'/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6 cursor-pointer'/>
            </button>
        </div>


        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>

            {/* Cross Button */}
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
            </div>

            {/* Nav-Bar mobile */}
            <li> <a href="#top" className={`font-Ovo ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}  onClick={closeMenu}>Home</a></li>
            <li> <a href="#about" className={`font-Ovo ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}  onClick={closeMenu}>About me</a></li>
            <li> <a href="#work" className={`font-Ovo ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}  onClick={closeMenu}>My work</a></li>
            <li> <a href="#contact" className={`font-Ovo ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}  onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
