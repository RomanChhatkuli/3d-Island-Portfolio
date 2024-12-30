import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className='header'>
            <NavLink to="/" className="flex justify-center items-center w-10 h-10 bg-white rounded-lg shadow-md text-lg font-medium">
                <p className='blue-gradient_text'>RC</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-500" : "text-black-500"}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? "text-blue-500" : "text-black-500"}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar