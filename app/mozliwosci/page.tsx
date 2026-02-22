import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BookOpen,
  FileText,
  BarChart3,
  Database,
  Globe,
  Users,
  Award,
  TrendingUp,
  Settings,
  Calendar,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Możliwości - Bibliografia Publikacji Pracowników",
  description: "Funkcje systemu BPP — katalogowanie publikacji, integracja z PBN, raporty ewaluacyjne, import danych i wiele więcej.",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Katalogowanie publikacji",
      description: "Dokumentowanie różnego typu publikacji pracowników uczelni",
      details: [
        "Książki naukowe i rozdziały w książkach",
        "Artykuły w czasopismach naukowych i popularnonaukowych",
        "Materiały konferencyjne indeksowane w bazach",
        "Doniesienia, streszczenia, referaty, komunikaty",
        "Postery, recenzje, tłumaczenia, mapy",
      ],
    },
    {
      icon: FileText,
      title: "Wykazy dorobku naukowego",
      description: "Tworzenie profesjonalnych wykazów dla różnych celów",
      details: [
        "Wykazy przy staraniu się o awans",
        "Dokumentacja do konkursów i grantów",
        "Raporty dla jednostek administracyjnych",
        "Dokumentacja dla władz uczelni",
      ],
    },
    {
      icon: Database,
      title: "Integracje zewnętrzne",
      description: "Wymiana danych z krajowymi i międzynarodowymi systemami",
      details: [
        "Przekazywanie danych do Polskiej Bibliografii Naukowej (PBN)",
        "Sprawozdawczość do systemu POLON (MNiSW)",
        "Import z PubMed®, Web of Science®",
        "Eksport do systemu Primo® firmy Ex Libris",
        "Wymiana danych przez protokół OAI-PMH",
      ],
    },
    {
      icon: BarChart3,
      title: "Raporty i analizy",
      description: "Zaawansowane możliwości raportowania i analiz",
      details: [
        "Raporty przekrojowe dla dowolnych zapytań",
        "Raporty dla wydziałów, instytucji, zakładów",
        "Indywidualne raporty dla autorów",
        "Tworzenie rankingów pracowników",
        "Analizy dorobku naukowego",
      ],
    },
    {
      icon: TrendingUp,
      title: "Automatyczna punktacja",
      description: "Automatyczne naliczanie punktów na podstawie aktualnych list",
      details: [
        "Punkty na podstawie list czasopism MNiSW",
        "Automatyczne uwzględnianie Impact Factor",
        "Aktualizacja punktacji zgodnie z przepisami",
        "Historia zmian punktacji",
      ],
    },
    {
      icon: Globe,
      title: "Dostęp webowy",
      description: "Pełny dostęp przez przeglądarkę internetową",
      details: [
        "Interfejs przyjazny użytkownikowi",
        "Obsługa wszystkich nowoczesnych przeglądarek",
        "Kompatybilność z urządzeniami mobilnymi",
        "Dostęp z systemów iOS i Android",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              Możliwości systemu
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Co umożliwia oprogramowanie BPP</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Kompleksowe rozwiązanie do zarządzania dorobkiem naukowym z zaawansowanymi funkcjami katalogowania,
              raportowania i integracji z zewnętrznymi systemami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 animate-stagger">
            {features.map((feature, index) => (
              <Card key={index} className="h-full card-hover">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Interfejs użytkownika</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interfejs oprogramowania został przygotowany tak, aby być maksymalnie przyjaznym i czystym dla
                użytkownika końcowego. Intuicyjna nawigacja i przejrzyste formularze ułatwiają codzienną pracę z
                systemem.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Przyjazny interfejs</h3>
                  <p className="text-sm text-muted-foreground">Intuicyjny i łatwy w obsłudze</p>
                </div>
                <div className="text-center">
                  <Settings className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Konfigurowalny</h3>
                  <p className="text-sm text-muted-foreground">Dostosowany do potrzeb uczelni</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Profesjonalny</h3>
                  <p className="text-sm text-muted-foreground">Spełnia standardy akademickie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Gotowy na wypróbowanie?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Przetestuj wszystkie funkcje systemu w bezpłatnej wersji demonstracyjnej lub skontaktuj się z nami w
              sprawie wdrożenia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://calendly.com/mpasternak/bpp-ewaluacja" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Umów spotkanie
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Wypróbuj demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Skontaktuj się</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
