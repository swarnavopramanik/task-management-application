import React from 'react'

import { HiPlus, HiCog, HiInformationCircle as Info, HiMenu } from "react-icons/hi"
import { LogoLight30 } from '../assets/taskylogos'


export default function DashboardNav() {
  return (

    <div className=" h-12 md:h-screen w-screen md:w-52 pt-1 px-1 md:p-1">
      <nav className="bg-gray-800  h-full w-full rounded-lg md:rounded-r-lg">
        <div className='flex md:hidden justify-between h-full p-2'>
          <div className=" my-auto">
            <a href='/' className="block w-24 text-white "><LogoLight30 /></a>
          </div>
          <button className=''>
            <HiMenu className="text-white text-2xl" />
          </button>
        </div>
        <div className="hidden md:flex flex-col h-full justify-between">
          <div>
            <div className="my-4">
              <a href='/' className="block w-1/2 md:w-3/4 mx-auto text-white "><LogoLight30 /></a>
            </div>
            <div className="mt-2 border-t border-slate-500">
              <a href='#' className="block mx-auto text-white hover:bg-slate-600  py-1.5 px-4">Home</a>
              <a href='#' className="block mx-auto text-white hover:bg-slate-600  py-1.5 px-4 ">Tasks</a>
              <a href='#' className="block mx-auto text-white hover:bg-slate-600  py-1.5 px-4 ">Inbox</a>
            </div>
          </div>

          <div className="block border-t border-slate-500">
            <button className=" inline-flex w-full items-center hover:bg-slate-600 py-2 px-4">
              <HiCog className='text-xl' />
              <span className='text-sm ml-1'>Settings</span>
            </button>
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
