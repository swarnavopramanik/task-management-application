import React from "react"
import clsx from "clsx"

export default function Avatar({ className, ...props }) {
    return (
        <img
            // img to be chaged later.
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className={clsx("w-8 rounded-full shadow-lg cursor-pointer", className)}
            alt="Avatar"
            {...props}
        />
    )
}
