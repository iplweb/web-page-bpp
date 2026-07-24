import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Server, Monitor, HardDrive, Cpu, Calendar, ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "O systemie - Bibliografia Publikacji Pracowników",
  description: "Architektura, wymagania techniczne i historia systemu BPP — open source do zarządzania dorobkiem naukowym jednostek badawczych.",
}

const faqs = [
  {
    question: "Czy pracownicy mogą sami dodawać swoje publikacje?",
    answer:
      "Pracownicy zgłaszają swoje prace do systemu, natomiast ich wprowadzaniem i weryfikacją zajmują się wyznaczeni operatorzy (np. pracownicy biblioteki). Dzięki temu dane pozostają spójne, ujednolicone i wolne od duplikatów — jedna praca współautorów nie trafia do bazy w kilku różnych wersjach.",
  },
  {
    question: "Czy system obsługuje logowanie instytucjonalne (Microsoft 365, OpenID, LDAP)?",
    answer:
      "Tak. Poza kontami lokalnymi system można zintegrować z logowaniem instytucjonalnym — m.in. OpenID, Microsoft Office 365 oraz LDAP. Możliwe są również inne metody uwierzytelniania dostosowane do infrastruktury uczelni.",
  },
  {
    question: "Skąd biorą się dane — czy trzeba wszystko wpisywać ręcznie?",
    answer:
      "Dużą część danych można zaimportować automatycznie — z PBN, baz CrossRef i Web of Science, repozytoriów DSpace, a także ze zgłoszeń pracowników. Ręczne wprowadzanie jest możliwe, ale nie jest jedyną drogą.",
  },
  {
    question: "Czy BPP współpracuje ze sztuczną inteligencją (AI)?",
    answer: (
      <>
        Tak. Serwer <strong>BPP-MCP</strong> podłącza bazę do asystenta AI — np. Claude lub ChatGPT — dzięki czemu o
        dorobek naukowy można pytać zwykłym językiem i otrzymywać zestawienia oraz wykresy tam, gdzie nie ma gotowego
        raportu. Asystent łączy się z bazą przez publiczne API, na Twoim koncie i z Twoimi uprawnieniami, wyłącznie do
        odczytu — niczego nie zmienia ani nie usuwa. Szczegóły opisujemy na stronie{" "}
        <Link
          href="/bpp-ai"
          className="font-medium text-primary underline underline-offset-2 hover:no-underline"
        >
          Sztuczna inteligencja w BPP
        </Link>
        .
      </>
    ),
  },
  {
    question: "Czy jedna instalacja obsłuży kilka jednostek lub uczelni?",
    answer:
      "Tak. Mechanizm federacji pozwala obsługiwać wiele instytucji na jednej instalacji oprogramowania, co upraszcza utrzymanie i obniża koszty dla grup jednostek.",
  },
  {
    question: "Gdzie przechowywane są dane? Czy to usługa w chmurze?",
    answer:
      "BPP instalujecie na własnym serwerze lub na wskazanym przez Was hostingu. Macie pełną kontrolę nad danymi — to nie jest zamknięta usługa typu SaaS.",
  },
  {
    question: "Czy system liczy punkty i wspiera ewaluację?",
    answer:
      "Tak. System automatycznie nalicza punkty na podstawie aktualnych list ministerialnych, analizuje sloty i pomaga przygotować dane do ewaluacji jednostki.",
  },
  {
    question: "Czy potrzebujemy własnego działu IT, żeby utrzymać system?",
    answer: (
      <>
        BPP można wdrożyć samodzielnie — jest oprogramowaniem open source, a proces instalacji ułatwia narzędzie{" "}
        <a
          href="https://github.com/iplweb/bpp-deploy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-2 hover:no-underline"
        >
          bpp-deploy
        </a>{" "}
        wraz z{" "}
        <a
          href="https://iplweb.github.io/bpp-deploy/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-2 hover:no-underline"
        >
          pełną dokumentacją wdrożenia
        </a>
        . Dostępne jest też komercyjne wsparcie wdrożeniowe i utrzymaniowe.
      </>
    ),
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">
              O systemie
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Bibliografia Publikacji Pracowników</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              System informatyczny rozwijany od kilkunastu lat, przeznaczony do katalogowania informacji o publikacjach
              pracowników jednostek naukowych.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Bibliografia Publikacji Pracowników (w skrócie BPP) to zaawansowany system informatyczny stworzony
              specjalnie dla potrzeb jednostek naukowych. Oprogramowanie umożliwia kompleksowe zarządzanie dorobkiem
              naukowym pracowników uczelni, od wprowadzania publikacji po generowanie szczegółowych raportów.
            </p>

            <p>
              System został zaprojektowany z myślą o maksymalnej funkcjonalności przy zachowaniu prostoty użytkowania.
              Interfejs jest przyjazny dla użytkownika końcowego, a jednocześnie oferuje zaawansowane możliwości
              analityczne i raportowe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-stagger">
            <Card className="card-hover">
              <CardHeader>
                <Monitor className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Wymagania klienta</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Dostęp przez przeglądarkę WWW</li>
                  <li>• Obsługa wszystkich nowoczesnych przeglądarek</li>
                  <li>• Kompatybilność z urządzeniami mobilnymi</li>
                  <li>• Systemy iOS i Android</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Server className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Wymagania serwera</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Minimalne:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 8 GB RAM</li>
                      <li>• 30 GB przestrzeni dyskowej</li>
                      <li>• Ubuntu GNU/Linux 64-bit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Optymalne:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 12-16 GB RAM</li>
                      <li>• 64 GB przestrzeni dyskowej</li>
                      <li>• Możliwość rozdzielenia serwerów</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12 card-hover animate-fade-in">
            <CardHeader>
              <CardTitle>Architektura modularna</CardTitle>
              <CardDescription>System zbudowany w sposób modularny dla maksymalnej elastyczności</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <HardDrive className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Serwer bazodanowy</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedykowany serwer do przechowywania i zarządzania danymi publikacji
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Cpu className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Serwer aplikacji</h4>
                    <p className="text-sm text-muted-foreground">
                      Serwer obsługujący logikę biznesową i interfejs użytkownika
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12 card-hover animate-fade-in">
            <CardHeader>
              <CardTitle>System BPP jest systemem otwartym</CardTitle>
              <CardDescription>
                Integracje z krajowymi i międzynarodowymi systemami, standardami wymiany danych oraz asystentami AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 animate-stagger">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">PBN</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">PBN</h4>
                    <p className="text-xs text-muted-foreground">Polska Bibliografia Naukowa</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xs">POL-on</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">POL-on</h4>
                    <p className="text-xs text-muted-foreground">System Informacji o Nauce</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">Primo</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Primo</h4>
                    <p className="text-xs text-muted-foreground">system discovery Ex Libris</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xs">JSON</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">JSON API</h4>
                    <p className="text-xs text-muted-foreground">wszystkie dane natychmiast do pobrania</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xs">BibTeX</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">BibTeX</h4>
                    <p className="text-xs text-muted-foreground">wymiana danych w formacie BibTeX</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-xs">DSpace</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">DSpace</h4>
                    <p className="text-xs text-muted-foreground">repozytoria instytucjonalne</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 font-bold text-sm">OAI</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">OAI-PMH</h4>
                    <p className="text-xs text-muted-foreground">udostępnianie metadanych agregatorom</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-sm">DC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Dublin Core</h4>
                    <p className="text-xs text-muted-foreground">standard metadanych</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-lime-100 rounded-lg flex items-center justify-center">
                    <span className="text-lime-700 font-bold text-xs">ORCID</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">ORCID</h4>
                    <p className="text-xs text-muted-foreground">identyfikatory naukowców</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center">
                    <span className="text-sky-600 font-bold text-xs">CrossRef</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">CrossRef</h4>
                    <p className="text-xs text-muted-foreground">metadane publikacji i DOI</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-amber-700 font-bold text-sm">MCP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Serwer MCP</h4>
                    <p className="text-xs text-muted-foreground">dostęp dla asystentów AI</p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-muted-foreground text-pretty">
                <strong>Nowość:</strong> przez serwer <strong>MCP</strong> dane BPP udostępnisz asystentom AI (Claude,
                ChatGPT) — pytania zwykłym językiem zamiast eksportu do arkusza.{" "}
                <Link
                  href="/bpp-ai"
                  className="font-medium text-primary underline underline-offset-2 hover:no-underline"
                >
                  Sztuczna inteligencja w BPP →
                </Link>
              </p>
            </CardContent>
          </Card>

          <div className="bg-muted/50 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-semibold mb-4">Licencja i koszt</h3>
            <p className="mb-4">
              Od kwietnia 2017 roku oprogramowanie dostępne jest na <strong>otwartoźródłowej licencji MIT</strong>, co
              oznacza brak jakichkolwiek dodatkowych opłat licencyjnych. System można swobodnie używać, modyfikować i
              dystrybuować.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/demo">Wypróbuj demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/zrodla">Zobacz kod źródłowy</Link>
              </Button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Często zadawane pytania</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-lg border bg-card px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Potrzebujesz pomocy z wdrożeniem?</h3>
            <p className="text-muted-foreground mb-6">
              Skorzystaj z profesjonalnego wsparcia komercyjnego lub skontaktuj się z nami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://calendly.com/mpasternak/bpp-ewaluacja" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Umów spotkanie
                </Link>
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
