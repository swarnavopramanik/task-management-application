import React from 'react'
import clsx from 'clsx'
import {
    HiSearch,
    HiMenu,
} from 'react-icons/hi'
import { useOutletContext } from 'react-router-dom'

export default function DashboardHome() {
    const [Nav,setNav] = useOutletContext();
    return (

        <>
            <div className="flex justify-between items-center px-2 bg-slate-800 border-b border-slate-500 rounded-t-lg ">
                <div className="inline-flex items-center space-x-1">
                    <button className='block lg:hidden text-xl hover:bg-slate-700 p-1.5 rounded-lg'
                        onClick={() => setNav(!Nav)}>
                        <HiMenu />
                    </button>
                    <h2 className="py-2 text-xl font-mono text-white">Home</h2>
                </div>
                
                <div className="hidden md:block w-96 ">
                    <SearchBar />
                </div>
                <div>
                    <Avatar onClick={() => console.log('avatar clicked')} />
                </div>
            </div>
        </>
    )
}


function MenuBtn({ children, className, ...others }) {
    return (
        <button
            className={clsx("mr-1 bg-slate-500 px-2 py-1 rounded hover:bg-slate-600 hover:duration-500 hover:text-white", className)}
            {...others}>
            {children}
        </button>
    )
}

function SearchBar({className,...props }) {
    return (
        <div className="flex">
            <div className={clsx("w-full flex items-center bg-white rounded  focus:text-gray-700  border border-white focus-within:border-slate-600 pointer-events-none",className)}>
                <HiSearch className=' text-lg text-slate-500  mx-2' />
                <input
                    type="text"
                    className="w-full text-gray-700 py-1 mr-2 text-sm bg-white outline-none pointer-events-auto "
                    id="exampleFormControlInput1"
                    placeholder="Search task here"
                    {...props}
                ></input>
            </div>
        </div>
    )
}

function Avatar({ className, ...props }) {
    return (
        <img
            // img to be chaged later.
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className={clsx("w-8 rounded-full shadow-lg", className)}
            alt="Avatar"
            {...props}
        />
    )
}