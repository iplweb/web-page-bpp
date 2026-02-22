import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">Strona nie została znaleziona</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Strona główna
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/kontakt">
                Kontakt
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
