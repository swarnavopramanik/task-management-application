import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../components/dashboardnav'


export default function DashboardLayout() {
    return (
        <div>
            <div className="flex flex-col md:flex-row bg-slate-100 h-screen overflow-hidden ">
                <DashboardNav />
                <div className=" h-screen bg-slate-200  rounded-t-lg w-full ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

