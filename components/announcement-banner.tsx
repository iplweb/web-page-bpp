"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, MonitorDown, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

/**
 * Pojedynczy, kompaktowy banner zamiast trzech dużych paneli nad hero.
 * Rotuje automatycznie co kilka sekund; kropki pod banerem pozwalają
 * wybrać ogłoszenie ręcznie.
 */
const ROTATE_INTERVAL_MS = 7000

interface Announcement {
  icon: LucideIcon
  title: React.ReactNode
  description: string
  href: string
  cta: string
}

const announcements: Announcement[] = [
  {
    icon: Globe,
    title: (
      <>
        Interoperacyjność z <span className="text-primary">euroCRIS</span>
      </>
    ),
    description:
      "BPP eksportuje dane w standardzie CERIF-XML wg wytycznych OpenAIRE, a projekty i granty są już dostępne.",
    href: "/bpp-cris",
    cta: "Zobacz szczegóły",
  },
  {
    icon: Sparkles,
    title: (
      <>
        Sztuczna inteligencja w <span className="text-primary">BPP</span>
      </>
    ),
    description:
      "O dorobek uczelni zapytasz po polsku, a modele językowe mają własne drzwi do danych — natywny serwer MCP i otwarte API.",
    href: "/bpp-ai",
    cta: "Poznaj BPP-AI",
  },
  {
    icon: MonitorDown,
    title: (
      <>
        Gotowy instalator BPP dla <span className="text-primary">Windows</span>
      </>
    ),
    description:
      "Pobierz mały plik BPP-Setup i uruchom dwuklikiem — instalator sam pobierze i skonfiguruje wszystkie komponenty systemu.",
    href: "/zrodla?os=windows",
    cta: "Zobacz instrukcję",
  },
]

export function AnnouncementBanner() {
  const [index, setIndex] = useState(0)
  const paused = useRef(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % announcements.length), [])

  useEffect(() => {
    if (announcements.length < 2) return
    const timer = setInterval(() => {
      if (!paused.current) next()
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [next])

  const current = announcements[index]
  const Icon = current.icon

  return (
    <section className="px-4 pt-6" aria-label="Aktualności systemu BPP">
      <div
        className="container mx-auto max-w-5xl animate-fade-in"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onFocus={() => (paused.current = true)}
        onBlur={() => (paused.current = false)}
      >
        <Link
          href={current.href}
          className="group block overflow-hidden rounded-2xl border-2 border-orange-300/70 bg-gradient-to-r from-orange-400/50 via-orange-300/30 to-transparent px-5 py-4 shadow-sm transition-all hover:border-orange-400/80 hover:shadow-md sm:px-7 sm:py-5"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-bold sm:text-xl">{current.title}</h2>
                <Badge variant="secondary">nowość</Badge>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground text-pretty sm:text-base">
                {current.description}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center self-start rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform group-hover:scale-[1.03] sm:self-center">
              {current.cta}
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>

        {/* Kropki — osobny wiersz pod banerem */}
        <div className="mt-2 flex items-center justify-center">
          <div className="flex items-center gap-2" role="tablist" aria-label="Wybór ogłoszenia">
            {announcements.map((a, i) => (
              <button
                key={a.href}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ogłoszenie ${i + 1} z ${announcements.length}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  i === index
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
