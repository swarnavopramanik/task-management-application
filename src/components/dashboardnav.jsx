import React, { useContext, useState } from 'react'
import {
  NavLink,
} from 'react-router-dom'
import { HiInformationCircle as Info, HiX } from "react-icons/hi"
import { LogoLight30 } from '../assets/taskylogos'
import clsx from 'clsx'


export default function DashboardNav(props) {
  return (
    <div className={clsx(props.Nav ? null : "hidden", "flex w-full absolute lg:static lg:block h-screen lg:w-60 py-1 pl-0.5")}>
      <nav className=" bg-gray-800  h-full w-60 rounded-lg lg:rounded-r-lg border-r lg:border-none">
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
              <NavLink
                to='/settings'
                className="block mx-auto text-white hover:bg-slate-700  py-1.5 px-4 "
                style={({ isActive }) =>
                  isActive ? { background: '#64748B', color: '#111827' } : undefined
                }
              >
                Settings
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
      <button className="w-[calc(100vw-240px)] backdrop-blur-sm h-full cursor-default"
      onClick={() => props.setNav(!props.Nav)}></button>
    </div>
  )
}
