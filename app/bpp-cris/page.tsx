import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Sparkles,
  Library,
  UserSearch,
  FolderKanban,
  FlaskConical,
  Database,
  Lightbulb,
  Network,
  Workflow,
  Globe,
  GraduationCap,
  Building2,
  Calendar,
  Check,
} from "lucide-react"

export const metadata: Metadata = {
  title: "BPP-CRIS — zapowiedź nowych funkcji | Bibliografia Publikacji Pracowników",
  description:
    "BPP ewoluuje w pełny system informacji o nauce (CRIS): interoperacyjność z euroCRIS (CERIF-XML, OpenAIRE), repozytorium, profile naukowców, projekty i granty, potencjał badawczy i więcej. Część funkcji już działa, kolejne powstają.",
}

// Statusy gotowości modułów: available = już w BPP, soon = w planach
const statusConfig = {
  available: { label: "Dostępne", className: "border-transparent bg-green-100 text-green-700 hover:bg-green-100" },
  soon: { label: "Wkrótce", className: "" },
} as const

const modules = [
  {
    icon: Library,
    title: "Repozytorium",
    status: "available",
    description:
      "Pełne teksty publikacji, Open Access, nadawanie DOI i udostępnianie metadanych przez OAI-PMH — zgodność z mandatami otwartego dostępu i większa cytowalność.",
  },
  {
    icon: UserSearch,
    title: "Ludzie nauki",
    status: "available",
    description:
      "Profile naukowców: dorobek, ekspertyzy i osiągnięcia w jednym miejscu. CV i wykazy budują się automatycznie, a badaczy łatwiej znaleźć do współpracy.",
  },
  {
    icon: FolderKanban,
    title: "Projekty i granty",
    status: "available",
    description:
      "Ewidencja projektów badawczych i finansowania: harmonogramy, źródła, zespoły i rezultaty. Mniej pracy przy raportowaniu i pełna historia aktywności grantowej jednostki.",
  },
  {
    icon: FlaskConical,
    title: "Potencjał badawczy",
    status: "soon",
    description:
      "Aparatura, infrastruktura, kompetencje i oferta badawcza dla otoczenia gospodarczego — odpowiedź na pytanie „w czym naprawdę jesteśmy silni”.",
  },
  {
    icon: Database,
    title: "Zbiory danych badawczych",
    status: "soon",
    description:
      "Zarządzanie danymi badawczymi w duchu zasad FAIR: opis, udostępnianie i powiązanie zbiorów z publikacjami oraz projektami — gotowość na wymogi otwartych danych.",
  },
  {
    icon: Lightbulb,
    title: "Patenty i komercjalizacja",
    status: "available",
    description:
      "Patenty, zgłoszenia, wdrożenia i transfer technologii powiązane z autorami i projektami — pełny obraz praktycznych efektów badań i współpracy z biznesem.",
  },
  {
    icon: Network,
    title: "Sieci współpracy i dashboardy",
    status: "available",
    description:
      "Analityka dla zarządzających: wskaźniki, mapy współautorstwa i współpracy oraz pulpity wspierające decyzje strategiczne i przygotowanie do ewaluacji.",
  },
  {
    icon: Workflow,
    title: "Interoperacyjność i otwarte standardy",
    status: "available",
    description:
      "Otwarte API (JSON, REST) oraz udostępnianie metadanych przez OAI-PMH — swobodny eksport i wymiana danych z innymi systemami i agregatorami, bez uzależnienia od dostawcy.",
  },
  {
    icon: Globe,
    title: "Interoperacyjność z euroCRIS",
    status: "available",
    description:
      "Eksport danych w standardzie CERIF-XML zgodnie z wytycznymi OpenAIRE CRIS Guidelines — publikacje, osoby, jednostki, projekty i finansowanie trafiają do europejskiej infrastruktury nauki bez dodatkowej pracy.",
  },
] as const

const audiences = [
  {
    icon: GraduationCap,
    title: "Dla naukowców",
    points: [
      "Deponujesz dane raz — system wykorzystuje je w PBN, ewaluacji, wnioskach grantowych i raportach.",
      "Widoczność i łatwość bycia znalezionym — publiczny profil naukowca budujący CV automatycznie.",
      "Open Access bez wysiłku — jeden depozyt, DOI, zgodność z wymogami otwartości i większa cytowalność.",
    ],
  },
  {
    icon: Building2,
    title: "Dla zarządzających uczelnią",
    points: [
      "Pełny obraz potencjału — nie tylko publikacje, ale projekty, finansowanie, aparatura i kompetencje.",
      "Wsparcie decyzji i strategii — dashboardy, sieci współpracy, wskaźniki i symulacje ewaluacji.",
      "Zgodność i prezentacja na zewnątrz — instytucjonalny portal nauki oraz gotowość na obowiązki sprawozdawcze.",
    ],
  },
]

export default function BppCrisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 pb-12 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-6 animate-fade-in">
              <Sparkles className="mr-1 inline h-3.5 w-3.5" />
              Zapowiedź · w rozwoju
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              BPP staje się <span className="text-primary">BPP-CRIS</span>
            </h1>
            <p
              className="text-xl text-muted-foreground text-pretty animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              BPP ewoluuje z bibliografii publikacji w pełny <strong>system informacji o nauce (CRIS)</strong> — jedno
              źródło prawdy o dorobku, ludziach, projektach i potencjale badawczym uczelni.
            </p>
          </div>
        </section>

        {/* Wyróżnienie: interoperacyjność z euroCRIS */}
        <section className="px-4 pb-10">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 animate-fade-in">
              <div className="text-center">
                <Badge className={`mb-4 ${statusConfig.available.className}`}>
                  <Check className="mr-1 h-3 w-3" />
                  Nowość · już dostępne
                </Badge>
                <h2 className="text-2xl font-bold mb-4">Interoperacyjność z euroCRIS</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  BPP udostępnia dane w CERIF-XML — międzynarodowym formacie wymiany informacji o nauce opracowanym
                  przez organizację euroCRIS — zgodnie z wytycznymi OpenAIRE CRIS Guidelines. Dorobek uczelni jest
                  gotowy do agregacji przez europejską infrastrukturę nauki bez dodatkowej pracy po Waszej stronie.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Standard CERIF-XML</h3>
                    <p className="text-sm text-muted-foreground">
                      Format wymiany danych o nauce rozwijany przez euroCRIS
                    </p>
                  </div>
                  <div className="text-center">
                    <Workflow className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Wytyczne OpenAIRE</h3>
                    <p className="text-sm text-muted-foreground">
                      Eksport przez OAI-PMH zgodny z OpenAIRE CRIS Guidelines 1.2.0
                    </p>
                  </div>
                  <div className="text-center">
                    <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Pełny zakres danych</h3>
                    <p className="text-sm text-muted-foreground">
                      Publikacje, osoby, jednostki, projekty, finansowanie, patenty i konferencje
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dlaczego to ważne — dwie grupy odbiorców */}
        <section className="px-4 pb-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6 animate-stagger">
              {audiences.map((audience) => (
                <Card key={audience.title} className="card-hover">
                  <CardHeader>
                    <audience.icon className="h-9 w-9 text-primary mb-2" />
                    <CardTitle>{audience.title}</CardTitle>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {audience.points.map((point, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Moduły CRIS */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Co wchodzi w skład BPP-CRIS</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Część modułów działa już w BPP, pozostałe rozbudują system z katalogu publikacji w kompletny system
                informacji o nauce.
              </p>
            </div>

            {/* Legenda statusów */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Badge className={statusConfig.available.className}>
                  <Check className="mr-1 h-3 w-3" />
                  {statusConfig.available.label}
                </Badge>
                już w systemie
              </span>
              <span className="flex items-center gap-1.5">
                <Badge variant="secondary">{statusConfig.soon.label}</Badge>
                w planach rozwoju
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
              {modules.map((module) => (
                <Card key={module.title} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <module.icon className="h-10 w-10 text-primary mb-2" />
                      {module.status === "soon" ? (
                        <Badge variant="secondary" className="text-xs">
                          {statusConfig.soon.label}
                        </Badge>
                      ) : (
                        <Badge className={`text-xs ${statusConfig[module.status].className}`}>
                          {module.status === "available" && <Check className="mr-1 h-3 w-3" />}
                          {statusConfig[module.status].label}
                        </Badge>
                      )}
                    </div>
                    <CardTitle>{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-10">
              Część funkcji jest już dostępna w BPP; pozostałe są w trakcie rozwoju — zakres i harmonogram mogą ulec
              zmianie.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Chcesz współkształtować kierunek rozwoju?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Porozmawiajmy o tym, które funkcje BPP-CRIS są dla Waszej jednostki najważniejsze — Wasze potrzeby realnie
              wpływają na priorytety rozwoju.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://calendly.com/mpasternak/bpp-ewaluacja" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Umów spotkanie
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Napisz do nas</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
