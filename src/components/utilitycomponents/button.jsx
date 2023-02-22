import React from "react";
import clsx from "clsx";


export default function Btn({ children, className, type, ...props }) {
    return (
        <button
            type={type}
            className={clsx(
                "text-white font-medium text-sm ",
                "bg-slate-500 rounded shadow-md",
                "hover:bg-slate-600 hover:shadow-lg",                
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}


