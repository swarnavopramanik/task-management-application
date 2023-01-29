import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../components/dashboardnav'


export default function DashboardLayout() {
    return (
        <div>
            <div className="bg-slate-100 h-screen overflow-hidden ">
                <DashboardNav />

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-1  mt-6 h-[calc(100vh-68px)] ">
                    {/* section for calender or day events */}
                    <div className="bg-slate-200 rounded-t-lg hidden lg:block">
                        <h2 className=" p-2 text-lg text-center text-black">Calender</h2>
                        <hr className='border border-gray-100' />
                    </div>


                    {/* section for tasks  */}
                    <div className="bg-slate-200 col-span-1 md:row-span-4 md:col-span-3 rounded-t-lg ">
                        <Outlet/>
                    </div>


                    {/* section for teams */}
                    <div className="bg-slate-200 rounded-t-lg hidden md:block">
                        <h2 className=" p-2 text-lg text-center text-black">Teams</h2>
                        <hr className='border border-gray-100' />

                    </div>
                </div>
            </div>
        </div>
    )
}

