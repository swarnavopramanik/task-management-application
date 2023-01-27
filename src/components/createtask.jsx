import React from 'react'
import { HiX } from 'react-icons/hi'


export default function CreateTaskForm() {
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <div className="pb-2 mb-2 border-b-2 flex items-center justify-between">
                <legend className='text-black'>Create New Task</legend>
                <span className="text-black text-2xl"><HiX /></span>
                
            </div>
            <form>
                <div className="form-group mb-2">
                    <label htmlFor="">
                        <p className="text-black text-sm mb-1">Image Url</p>
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Name" />
                    </label>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="">
                        <p className='text-black text-sm mb-1'>Task Title</p>
                        <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Learn web dev, read book..." />
                    </label>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="">
                        <p className='text-black text-sm mb-1 font-thin'>Task Type</p>
                        <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Work..." />
                    </label>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="FormControlTextarea13" >
                        <p className='text-black text-sm mb-1'>Task Description</p>
                        <textarea
                            className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                            id="FormControlTextarea13"
                            rows="3"
                            placeholder="Explain about the task"
                        ></textarea>

                    </label>
                </div>

                <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
            </form>
        </div>
    )
}
