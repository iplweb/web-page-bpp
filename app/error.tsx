"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 py-16">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Wystąpił błąd</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Przepraszamy, coś poszło nie tak. Spróbuj odświeżyć stronę.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Spróbuj ponownie
          </Button>
          <Button asChild variant="outline">
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Strona główna
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
