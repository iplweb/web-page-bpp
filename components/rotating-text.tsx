"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RotatingText() {
  const evaluationTexts = [
    "Ewaluacja tuż-tuż – publikacje same się nie wgrają!",
    "Last minute na punkty – bo deadline nie zna litości.",
    "Punkty za 5 dwunasta – zdążysz, zanim zegar wybije.",
    "Nie czekaj na cud – ewaluacja trwa do północy.",
    "Mission: Ewaluacja – czas start, zegar tyka!",
    "Zbieraj sloty, nie minuty – bo końcówka już goni.",
    "Ewaluacyjny last call – wsiadasz, albo zostajesz.",
  ]

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % evaluationTexts.length)
        setIsVisible(true)
      }, 500)
    }, 10000)

    return () => clearInterval(interval)
  }, [evaluationTexts.length])

  return (
    <div className="bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-300 rounded-3xl p-8 relative overflow-hidden shadow-lg">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <h2
        className={`text-3xl font-bold text-orange-800 mb-4 text-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {evaluationTexts[currentTextIndex]}
      </h2>
      <p className="text-orange-700 text-lg text-center leading-relaxed">
        Z uwagi na natłok zapytań i zamówień, informujemy, że do końca roku jesteśmy w stanie przyjąć{" "}
        <span className="line-through text-orange-500">trzech</span>{" "}
        <span className="line-through text-orange-500">dwóch</span>{" "}
        <span className="font-bold text-orange-900 bg-yellow-300 px-3 py-1 rounded-full shadow-lg animate-pulse">
          JEDNEGO
        </span>{" "}
        klienta i zapewnić mu pełny import z PBN, wizualizację i optymalizację ewaluacji.
      </p>

      <div className="mt-6 text-center">
        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg" asChild>
          <Link href="/kontakt">Skontaktuj się jak najszybciej!</Link>
        </Button>
      </div>
    </div>
  )
}
