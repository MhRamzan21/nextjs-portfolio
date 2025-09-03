"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const FullScreen = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "w-full min-h-[calc(100dvh-200px)] py-20 flex items-center justify-center overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  )
}
