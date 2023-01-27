import React from 'react'
import LandingPage from './landingpage'
import {Link} from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <LandingPage/>
            <div className="bg-gradient-to-r from-slate-800 to-gray-900 h-screen flex justify-center items-center">
                <p>link to the  <Link to='dashboard' className='text-lg text-yellow-400'> Dashboard</Link> </p>
            </div>
        </div>
    )
}
