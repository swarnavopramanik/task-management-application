import React from "react";
import clsx from "clsx";

export function TabDiv({ children, className, ...props }) {
    return (
      <div
        className={clsx("w-full h-full",
          className,
        )}
        {...props}>
        {children}
      </div>
    )
  }