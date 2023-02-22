import React, { useContext, useState } from 'react'
import {
  NavLink,
} from 'react-router-dom'
import {  HiInformationCircle as Info, HiX} from "react-icons/hi"
import { LogoLight30 } from '../assets/taskylogos'
import clsx from 'clsx'


export default function DashboardNav(props) {
  return (

    <div className={clsx(props.Nav ? null : "hidden", "w-full sm:w-80 absolute lg:static lg:block h-screen lg:w-60 p-1 lg:pr-0 z-[2]")}>
      <nav className="bg-gray-800  h-full w-full rounded-lg lg:rounded-r-lg">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="py-4 relative">
              <a href='/' className="block w-36 lg:w-3/4 mx-auto text-white "><LogoLight30 /></a>
              <button type='button'
                className='absolute right-0 top-0 text-2xl m-1.5 hover:bg-slate-600 rounded-lg p-1 lg:hidden'
                onClick={() => props.setNav(!props.Nav)}>
                <HiX />
              </button>
            </div>
            
            <div className="mt-2 border-t border-slate-500">
              <NavLink
                to='/dashboard'
                className={clsx("block mx-auto text-white hover:bg-slate-700  py-1.5 px-4")}
                style={({ isActive }) =>
                  isActive ? { background: '#64748B', color: '#111827' } : undefined
                }
              >
                Home
              </NavLink>
              <NavLink
                to='/tasks' className="block mx-auto text-white hover:bg-slate-700  py-1.5 px-4 "
                style={({ isActive }) =>
                  isActive ? { background: '#64748B', color: '#111827' } : undefined
                }
              >
                Tasks
              </NavLink>
              <NavLink
                to='/inbox'
                className="block mx-auto text-white hover:bg-slate-700  py-1.5 px-4 "
                style={({ isActive }) =>
                  isActive ? { background: '#64748B', color: '#111827' } : undefined
                }
              >
                Inbox
              </NavLink>
            </div>
          </div>

          <div className="block border-t border-slate-500">
            <button className="inline-flex w-full items-center hover:bg-slate-600  py-2 px-4">
              <Info className='text-xl' />
              <span className='text-sm ml-1'>Help</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
