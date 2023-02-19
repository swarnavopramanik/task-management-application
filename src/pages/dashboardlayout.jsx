import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../components/dashboardnav'


export default function DashboardLayout() {
    return (
        <div>
            <div className="flex flex-col md:flex-row bg-slate-100 h-screen overflow-hidden ">
                <DashboardNav />
                <div className="h-screen w-full p-1">
                    <div className="w-full bg-green-100 h-full rounded-b-lg">
                    <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

