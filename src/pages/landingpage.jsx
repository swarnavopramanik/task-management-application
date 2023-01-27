import React from 'react'
import LandingPageNav from '../components/navbar'
import { LandingImgsm } from '../assets/landingpics'

export default function LandingPage() {
    return (
        <>
        {/* landing page */}
            < div className="block bg-gradient-to-r from-slate-800 to-gray-900  h-screen overflow-hidden " >
                
                <LandingPageNav />
                <div className="block lg:flex  lg:w-9/12 mx-auto items-center md:mt-10 lg:mt-20">

                    <div className='text-center lg:w-1/2 '>

                        <h2 className='text-2xl sm:text-4xl my-2 w-4/6 mx-auto  font-sans font-bold'>Task Management made easy with <span className="text-cyan-400">Tasky</span> </h2>
                        <p className='text-sm md:text-lg w-5/6 my-4 mx-auto px-4  '>Tasky lets you and your project team quickly set up new projects, assign and share tasks, share a centralized file library and calendar, send and receive notifications all at one place.</p>
                        <div className=" flex justify-center">

                            <button className="text-sm md:text-lg px-3 py-2 bg-yellow-300 rounded-lg hover:bg-yellow-400 text-black mx-2">Signup now!</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center mt-8">
                        <LandingImgsm />
                    </div>
                </div>
            </div >

        </>
    )
}
