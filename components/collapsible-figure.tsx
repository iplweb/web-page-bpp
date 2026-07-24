"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

type FigureImage = {
  src: string
  width: number
  height: number
  alt: string
}

const CAPTION =
  "Przykładowa odpowiedź · dane zanonimizowane · odpowiedź uzyskana wprost z modelu językowego"

// Szerokość kolumny kart (max-w-4xl ≈ 896 px) — do oszacowania pełnej wysokości.
const COLUMN_WIDTH = 896
const COLLAPSED_HEIGHT = 460

export function CollapsibleFigure({ image }: { image: FigureImage }) {
  const [open, setOpen] = useState(false)

  const fullHeight = Math.ceil((COLUMN_WIDTH * image.height) / image.width) + 40
  const collapsible = fullHeight > COLLAPSED_HEIGHT + 80

  return (
    <figure className="mt-5">
      <figcaption className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
        {CAPTION}
      </figcaption>
      <div className="relative overflow-hidden rounded-lg border bg-card shadow-sm">
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: !collapsible || open ? `${fullHeight}px` : `${COLLAPSED_HEIGHT}px` }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
        {collapsible && !open && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-card to-transparent"
            aria-hidden="true"
          />
        )}
      </div>
      {collapsible && (
        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            {open ? (
              <>
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
                Zwiń
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
                Rozwiń całość
              </>
            )}
          </button>
        </div>
      )}
    </figure>
  )
}
