import React from 'react'
import { NavLink } from 'react-router-dom'

import { HiMenu, } from "react-icons/hi"
import { LogoLight30 } from '../assets/taskylogos'

// navigation bar for the landing page.
export default function LandingPageNav() {
    return (
        <nav className="bg-transparent flex items-center justify-between w-full p-4 sm:p-0 sm:w-9/12 mx-auto h-28">

            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a href='/' className="font-semibold text-xl tracking-tight w-24"><LogoLight30 /></a>
            </div>

            <div className="hidden md:flex ">
                <div className="  flex items-center">
                    <NavBarLink name='About' link='about' />
                    <NavBarLink name='Features' link='features' />
                    <NavBarLink name='Login' link='login' />
                    <button className="px-3 py-2 bg-yellow-300 rounded-lg hover:bg-yellow-400 text-black mx-2" >Get Started</button>
                </div>
            </div>

            {/* hamburger menu */}
            <div className="block md:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <HiMenu />
                </button>
            </div>
        </nav>
    )
}

function NavBarLink({ name, link, styles = '' }) {
    return (
        <NavLink to={link} className={"block text-teal-200 hover:text-white mx-6" + styles}>
            {name}
        </NavLink>
    )
}

