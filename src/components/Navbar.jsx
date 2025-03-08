import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className='header'>
            <NavLink to="/" className="flex justify-center items-center w-10 h-10 bg-[#ecf2f3] rounded-lg shadow-lg text-lg font-medium">
                <p className='blue-gradient_text'>RC</p>
            </NavLink>
            <nav className='flex text-base md:text-lg md:gap-7 gap-3 font-medium'>
                <NavLink to="/about" className={({isActive}) => isActive ? "blue-gradient_text" : "text-black-500"}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? "blue-gradient_text" : "text-black-500"}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "blue-gradient_text" : "text-black-500"}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar