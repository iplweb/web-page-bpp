"use client"

import { useEffect, useState } from "react"

interface PreloaderProps {
  children: React.ReactNode
  images?: string[]
}

export function Preloader({ children, images = [] }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  // Default images that are used across the site
  const defaultImages = [
    "/images/logo-bpp.png",
    "/images/logo-bpp-large.png",
    "/images/logo-iplweb.png",
    "/images/logo-umlub-official.png",
    "/images/logo-up-official.png",
  ]

  const allImages = [...new Set([...defaultImages, ...images])]

  useEffect(() => {
    let loadedCount = 0
    const totalImages = allImages.length

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          loadedCount++
          setLoadProgress((loadedCount / totalImages) * 100)
          resolve()
        }
        img.onerror = () => {
          // Even if image fails, count it as loaded to not block the page
          loadedCount++
          setLoadProgress((loadedCount / totalImages) * 100)
          console.warn(`Failed to preload image: ${src}`)
          resolve()
        }
        img.src = src
      })
    }

    const loadAllImages = async () => {
      try {
        await Promise.all(allImages.map(preloadImage))
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error preloading images:", error)
        // Show content even if preloading fails
        setIsLoading(false)
      }
    }

    if (allImages.length > 0) {
      loadAllImages()
    } else {
      // No images to preload, show content immediately
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-background">
        <div className="relative h-24 w-24">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary/20 border-t-primary border-r-primary"></div>

          {/* Middle rotating ring (opposite direction) */}
          <div
            className="absolute inset-2 rounded-full border-4 border-primary/30 border-b-primary border-l-primary"
            style={{ animation: "spin 1.5s linear infinite reverse" }}
          ></div>

          {/* Inner pulsing circle */}
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-primary animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}