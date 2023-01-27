import React from 'react'
import { HiMenu, HiTrash, HiPencil } from "react-icons/hi"

export default function Card({ task }) {
    return (
        <div className="rounded-lg shadow-lg bg-white max-w-xs">
            <div className='rounded-t-lg  max-h-40 bg-slate-300 overflow-hidden'>
                <img className="  object-cover h-40 w-96 " src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
            </div>
            <div className="p-2">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-2">
                    Some quick example text to build on the card title and make up the bul...
                </p>
                <div className="flex mb-2">
                    <span className='text-black bg-slate-200 px-3 rounded-lg '>tag</span>
                </div>
                <div className="flex items-center justify-between">
                    <button type="button" className=" px-3 py-2 text-white  bg-slate-400 text-sm uppercase rounded hover:bg-blue-600 hover:duration-500 hover:ease-in-out hover:text-white  ">Open task</button>
                    <div className="inline-flex " role="group">
                        <CardIcon name={<HiPencil />} />
                        <CardIcon name={<HiTrash color='red' />} />
                    </div>
                </div>
            </div>
        </div>

    )
}

function CardIcon({ name, color }) {
    return (
        <button
            type="button"
            className="
    rounded-l
    p-2
    text-black
    text-2xl
    uppercase
    hover:bg-black hover:bg-opacity-5
  "
        >
            {name ? name : btn}
        </button>
    )
}



