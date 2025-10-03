import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, BookOpen, ExternalLink, Code, FileText, Download, GitBranch, Package } from "lucide-react"

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
            <h1 className="text-4xl font-bold mb-6">Zasoby dla deweloperów</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Wszystkie niezbędne zasoby do instalacji, konfiguracji i rozwoju systemu BPP. Kod źródłowy, dokumentacja i
              przykłady wdrożeń.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-stagger">
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Sposób instalacji</h2>
            <div className="grid grid-cols-1 gap-8">
              <Card className="card-hover animate-fade-in">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Instalacja z Docker</CardTitle>
                  <CardDescription>
                    Na ten moment instalacja za pomocą Dockera jest jedynym wspieranym sposobem instalacji systemu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">1. Pobierz kod źródłowy:</p>
                      <div className="bg-muted rounded-lg p-4">
                        <code className="text-sm">git clone https://github.com/iplweb/bpp.git</code>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">2. Uruchom system:</p>
                      <div className="bg-muted rounded-lg p-4">
                        <code className="text-sm">cd bpp && docker compose up -d</code>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 mt-4">
                    Szczegółowe instrukcje instalacji znajdziesz w dokumentacji technicznej.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://bpp.readthedocs.io" target="_blank">
                      Zobacz instrukcje
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Narzędzia instalacyjne</h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Pobierz niezbędne narzędzia do instalacji systemu BPP
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
                <Card className="hover:shadow-lg transition-shadow card-hover">
                  <CardHeader>
                    <Package className="h-10 w-10 text-blue-600 mb-3" />
                    <CardTitle className="text-lg">Docker</CardTitle>
                    <CardDescription>Platforma konteneryzacji wymagana do uruchomienia systemu</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href="https://docker.com" target="_blank" rel="noopener noreferrer">
                        Pobierz Docker <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow card-hover">
                  <CardHeader>
                    <GitBranch className="h-10 w-10 text-orange-600 mb-3" />
                    <CardTitle className="text-lg">Git dla Windows</CardTitle>
                    <CardDescription>System kontroli wersji do pobrania kodu źródłowego</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">
                        Pobierz Git <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow card-hover">
                  <CardHeader>
                    <Package className="h-10 w-10 text-blue-500 mb-3" />
                    <CardTitle className="text-lg">Docker Hub</CardTitle>
                    <CardDescription>Gotowe obrazy kontenerów systemu BPP</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href="https://hub.docker.com/u/iplweb" target="_blank" rel="noopener noreferrer">
                        Zobacz obrazy <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
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
