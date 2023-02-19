import React from 'react'
import LandingPageNav from '../components/navbar'

export default function NotFound() {
  return (
    <div className='block bg-gradient-to-r from-slate-800 to-gray-900  h-screen overflow-hidden '>
        <LandingPageNav />
        <div className="flex justify-center">
            <h2 className="text-4xl">
                Page not found.
            </h2>
        </div>
    </div>
  )
}
