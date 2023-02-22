import React from "react";
import clsx from "clsx";


export default function Btn({ children, className, type, ...props }) {
    return (
        <button
            type={type}
            className={clsx(
                className,
                'Btn',
                "hover:bg-slate-600 hover:shadow-lg duration-150 ease-in",                                
            )}
            {...props}
        >
            {children}
        </button>
    )
}


