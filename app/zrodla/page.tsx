import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, BookOpen, ExternalLink, FileText, Rocket } from "lucide-react"
import { InstallationTabs } from "@/components/installation-tabs"

export const metadata: Metadata = {
  title: "Pobierz - Bibliografia Publikacji Pracowników",
  description: "Kod źródłowy, dokumentacja i instrukcje instalacji systemu BPP. Oprogramowanie open source dostępne na licencji MIT.",
}

export default function SourcesPage() {
  const resources = [
    {
      title: "Kod źródłowy na GitHub",
      description: "Pełny kod źródłowy systemu BPP dostępny na licencji MIT",
      icon: Github,
      url: "https://github.com/iplweb/bpp",
      type: "Repozytorium",
    },
    {
      title: "Repozytorium wdrożeniowe",
      description: "Orkiestracja Docker Compose z monitoringiem, backupami i automatyczną konfiguracją",
      icon: Rocket,
      url: "https://github.com/iplweb/bpp-deploy",
      type: "Wdrożenie",
    },
    {
      title: "Dokumentacja techniczna",
      description: "Kompletna dokumentacja instalacji, konfiguracji i użytkowania",
      icon: BookOpen,
      url: "https://bpp.readthedocs.io",
      type: "Dokumentacja",
    },
    {
      title: "Zamów serwis demo",
      description: "Złóż wniosek o utworzenie dedykowanego serwisu demonstracyjnego",
      icon: ExternalLink,
      url: "/demo",
      type: "Demo",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              Pobierz
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Zainstaluj system BPP</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Wybierz swój system operacyjny i uruchom BPP w kilku prostych krokach.
            </p>
          </div>

          <Card className="mb-16 animate-fade-in">
            <CardHeader>
              <CardTitle>Instrukcja instalacji krok po kroku</CardTitle>
              <CardDescription>
                Wybierz swój system operacyjny, aby zobaczyć szczegółową instrukcję
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InstallationTabs />
            </CardContent>
          </Card>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Zasoby dla deweloperów</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-stagger">
              {resources.map((resource, index) => (
                <Card key={index} className="h-full card-hover">
                  <CardHeader>
                    <resource.icon className="h-10 w-10 text-primary mb-3" />
                    <Badge variant="outline" className="w-fit mb-2">
                      {resource.type}
                    </Badge>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                        Przejdź <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Integracja z Polską Bibliografią Naukową (PBN)</h2>
            <p className="text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
              System BPP oferuje pełną integrację z PBN. Poniżej znajdziesz dokumentację niezbędną do skonfigurowania
              połączenia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-stagger">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Konfiguracja po stronie PBN</CardTitle>
                  <CardDescription>Jak uzyskać token aplikacji w systemie PBN</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link
                      href="https://pbn.nauka.gov.pl/centrum-pomocy/baza-wiedzy/uzyskanie-integracji-z-api-pbn/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Baza wiedzy PBN <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Konfiguracja po stronie BPP</CardTitle>
                  <CardDescription>Jak skonfigurować integrację w systemie BPP</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link
                      href="https://bpp.readthedocs.io/pl/latest/konfiguracja_pbn.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dokumentacja BPP <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Licencja MIT</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              System BPP jest dostępny na otwartej licencji MIT, co oznacza pełną swobodę użytkowania, modyfikacji i
              dystrybucji oprogramowania bez dodatkowych opłat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="https://github.com/iplweb/bpp" target="_blank">
                  Zobacz kod źródłowy
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/kontakt">Potrzebujesz pomocy?</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
