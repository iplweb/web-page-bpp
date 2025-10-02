"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState, useLayoutEffect } from "react"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState<"idle" | "fadeOut" | "fadeIn">("idle")
  const prevPathname = useRef(pathname)

  // Use useLayoutEffect to update children synchronously when not transitioning
  useLayoutEffect(() => {
    if (transitionStage === "idle") {
      setDisplayChildren(children)
    }
  }, [children, transitionStage])

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // Start fade out of old content
      setTransitionStage("fadeOut")

      // After fade out completes, switch content and fade in
      const fadeOutTimer = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage("fadeIn")

        // After fade in completes, reset to idle
        const fadeInTimer = setTimeout(() => {
          setTransitionStage("idle")
          prevPathname.current = pathname
        }, 400)

        return () => clearTimeout(fadeInTimer)
      }, 300)

      return () => clearTimeout(fadeOutTimer)
    }
  }, [pathname, children])

  return (
    <div
      className={cn(
        "page-transition-wrapper",
        transitionStage === "fadeOut" && "page-exit",
        transitionStage === "fadeIn" && "page-enter",
        transitionStage === "idle" && "page-idle"
      )}
    >
      {displayChildren}
    </div>
  )
}