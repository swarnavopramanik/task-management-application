import React from 'react'

import { HiPlus, HiCog, HiInformationCircle as Info, } from "react-icons/hi"
import { LogoLight30 } from '../assets/taskylogos'


export default function DashboardNav() {
  return (
    <div>
      <nav className="bg-gray-800 flex items-center justify-between w-full px-4 py-2 ">

        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href='/' className="font-semibold text-xl tracking-tight w-24"><LogoLight30 /></a>
        </div>

        <div className="flex">
          
          <button className="text-xl mx-1.5 rounded-lg inline-flex items-center hover:bg-slate-600 py-1 px-2"><HiCog /><span className='text-sm ml-1'>Settings</span></button>
          <button className="text-xl mx-1.5 rounded-lg inline-flex items-center hover:bg-slate-600 py-1 px-2"><Info /><span className='text-sm ml-1'>Help</span></button>
        </div>
      </nav>
    </div>
  )
}
