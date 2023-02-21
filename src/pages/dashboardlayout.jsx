import React, {  useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../components/dashboardnav'


export default function DashboardLayout() {
    const [Nav, setNav] = useState(false);
    return (
        <div>
            
                <div className="flex flex-row h-screen overflow-hidden bg-zinc-400 ">
                    <DashboardNav Nav ={Nav} setNav={setNav} />
                    <div className="h-screen w-full p-1">
                        <div className="w-full h-full rounded-lg bg-zinc-600">
                            <Outlet context={[Nav,setNav]}/>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}