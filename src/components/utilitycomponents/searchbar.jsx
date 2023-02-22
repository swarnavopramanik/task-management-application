import React from "react"
import { HiSearch } from "react-icons/hi"
import clsx from "clsx"

export default function SearchBar({className,...props }) {
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
