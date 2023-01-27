import React from 'react'
import DashboardNav from '../components/dashboardnav'
export default function DashboardLayout() {
  return (
    <div>
      <div className="bg-slate-200 h-screen">
        <DashboardNav/>
        <div className="grid grid-cols-5 gap-4">
            <div className="bg-slate-500 ">01</div>
            <div className="bg-slate-500 col-span-3 ">02</div>
            <div className="bg-slate-500">03   </div>
        </div>
      </div>
        {/* <button className="bg-slate-500 inline-flex items-center px-3 py-1 rounded-lg hover:bg-blue-500 hover:duration-500 hover:text-white"><HiPlus/> Add new</button> */}
    </div>
  )
}
