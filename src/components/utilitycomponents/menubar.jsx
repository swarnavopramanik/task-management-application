import React from "react"
import { HiMenu } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import Avatar from "./avatar"
import SearchBar from "./searchbar"


export default function MenuBar({pageName,...props}) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center px-2 bg-slate-800 border-b border-slate-500 rounded-t-lg ">
            <div className="inline-flex items-center space-x-1">
                <button className='block lg:hidden text-xl hover:bg-slate-700 p-1.5 rounded-lg'
                    {...props}>
                    <HiMenu />
                </button>
                <h2 className="py-2 text-xl font-mono text-white">{pageName}</h2>
            </div>

            <div className="hidden md:block w-96 ">
                <SearchBar />
            </div>
            <div>
                <Avatar onClick={() => {
                    navigate('/profile');
                }} />
            </div>
        </div>
    )
}