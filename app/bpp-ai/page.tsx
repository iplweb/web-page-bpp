import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CollapsibleFigure } from "@/components/collapsible-figure"
import {
  Sparkles,
  Bot,
  Plug,
  Search,
  Users,
  Building2,
  FileText,
  BookMarked,
  BookOpen,
  Terminal,
  ShieldCheck,
  Lock,
  EyeOff,
  Cloud,
  Quote,
  ListChecks,
  Table2,
  Github,
  Calendar,
  AlertTriangle,
  Compass,
  Gauge,
  LineChart,
  MessageSquare,
  Copy,
  Globe,
  ArrowDown,
  History,
  Rocket,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Sztuczna inteligencja w BPP — asystent AI przez adres /mcp | Bibliografia Publikacji Pracowników",
  description:
    "Podłącz bibliografię BPP do asystenta AI bez instalowania czegokolwiek: dopisz /mcp do adresu swojej instalacji i skorzystaj z gotowej instrukcji. Pytaj o dorobek naukowy własnymi słowami.",
}

const steps = [
  {
    icon: Globe,
    title: "Otwórz /mcp w przeglądarce",
    description:
      "Wejdź na adres swojej bibliografii z dopiskiem /mcp. Masz konto w BPP? Zaloguj się — strona pokaże wtedy wariant z logowaniem, z dostępem także do danych niepublicznych.",
  },
  {
    icon: Copy,
    title: "Skopiuj gotową wiadomość",
    description:
      "Wklej ją asystentowi AI. Asystenci pracujący w terminalu lub edytorze (Claude Code, Codex, Cursor) dodadzą serwer sami, pozostali podpowiedzą, gdzie kliknąć. Dla części narzędzi jest też przycisk „Dodaj serwer”.",
  },
  {
    icon: MessageSquare,
    title: "Pytaj własnymi słowami",
    description:
      "Asystent sam dobiera narzędzia: wyszukuje publikacje i autorów, czyta rekordy, składa zestawienia i wykresy. Wyłącznie do odczytu.",
  },
]

const clients = [
  "Claude",
  "ChatGPT",
  "Claude Code",
  "OpenAI Codex",
  "Cursor",
  "VS Code",
  "Gemini CLI",
  "Windsurf",
  "Zed",
  "LM Studio",
  "Mistral Le Chat",
  "Copilot Studio",
]

const skillPoints = [
  {
    icon: BookMarked,
    title: "Zestaw instrukcji, nie program",
    description:
      "Umiejętność to katalog z plikiem instrukcji (i pomocniczymi skryptami) — „przepis” na rozmowę z API BPP: gdzie pytać, jak się zalogować, jak stronicować i budować złożone zapytania. To wiedza przekazana asystentowi, a nie działający w tle serwer.",
  },
  {
    icon: Bot,
    title: "Asystent wykonuje ją sam",
    description:
      "Gdy Twoje pytanie dotyczy BPP, asystent w locie sięga po umiejętność i sam realizuje kolejne kroki — wyszukiwanie, pobieranie rekordów, stronicowanie, a dla zalogowanych zapytania DjangoQL. Tak, jakby dostał instrukcję obsługi bazy.",
  },
  {
    icon: Copy,
    title: "Instalacja w kilka sekund",
    description:
      "W Claude Code umiejętność dodajesz jako plugin, dwoma poleceniami — albo po prostu kopiując katalog. Nic nie działa w tle, nie ma zależności do utrzymania.",
  },
]

const bppMcpPoints = [
  {
    icon: History,
    title: "Instalacja bez adresu /mcp",
    description:
      "Wasza wersja BPP nie ma jeszcze wbudowanego serwera MCP. BPP-MCP łączy się z bibliografią przez jej API, więc zadziała także tam.",
  },
  {
    icon: Rocket,
    title: "Najnowsze funkcje od razu",
    description:
      "Nowe narzędzia trafiają najpierw do BPP-MCP, a do serwera wbudowanego w BPP — z kolejnym wydaniem systemu. Kto potrzebuje ich już dziś, instaluje BPP-MCP.",
  },
  {
    icon: Terminal,
    title: "Narzędzie bez zdalnego MCP",
    description:
      "Część programów uruchamia serwery MCP wyłącznie lokalnie (stdio). BPP-MCP działa właśnie tak — dodajesz go do klienta jednym poleceniem.",
  },
]

const whyPoints = [
  {
    icon: Compass,
    title: "Pytania bez gotowego raportu",
    description:
      "BPP ma pokaźny zestaw raportów i dobre wyszukiwanie. AI przydaje się dokładnie tam, gdzie raportu jeszcze nie ma — a zestawienie potrzebne jest na jutro.",
  },
  {
    icon: LineChart,
    title: "Analiza ad hoc i wizualizacje",
    description:
      "Porównania, przekroje, wykresy, tabele zbiorcze. Zamiast eksportu do Excela i ręcznego składania arkusza — jedno pytanie i gotowy dokument do sprawdzenia.",
  },
  {
    icon: MessageSquare,
    title: "Pytania własnymi słowami",
    description:
      "Nie trzeba znać struktury bazy ani składni zapytań. Opisujesz, co chcesz zobaczyć; tłumaczeniem na zapytania zajmuje się asystent.",
  },
  {
    icon: Gauge,
    title: "Szukanie rozwiązań, o których nie pomyśleliśmy",
    description:
      "Największa wartość bywa w eksploracji — w pytaniach, które zadaje się dopiero wtedy, gdy odpowiedź kosztuje minuty zamiast pół dnia pracy.",
  },
  {
    icon: Users,
    title: "Sylwetka naukowca na bazie dorobku",
    description:
      "Z całego dorobku autora asystent złoży zwięzłą sylwetkę naukową — obszary badań, najważniejsze publikacje, czasopisma i dynamikę w czasie — gotową do wniosku, sprawozdania czy strony jednostki.",
  },
  {
    icon: FileText,
    title: "Eleganckie, estetyczne wyciągi",
    description:
      "Nie tylko surowe tabele — asystent przygotuje dopracowane, gotowe do druku zestawienia i karty: czytelny układ, wykresy i typografię, które można wprost wkleić do dokumentu.",
  },
]

const capabilities = [
  {
    icon: Search,
    title: "Wyszukiwanie publikacji",
    description: "Pełnotekstowe przeszukiwanie bazy z rankingiem trafności.",
  },
  {
    icon: Users,
    title: "Wyszukiwanie autorów",
    description: "Odnajdywanie autorów po nazwisku wraz z pełnym dorobkiem.",
  },
  {
    icon: Building2,
    title: "Dorobek jednostek",
    description: "Publikacje przypisane do wybranej jednostki organizacyjnej.",
  },
  {
    icon: FileText,
    title: "Pełne rekordy",
    description: "Szczegóły rekordu z rozwiniętymi relacjami — bez ręcznego podążania za odnośnikami.",
  },
  {
    icon: BookMarked,
    title: "Słowniki systemowe",
    description: "Charaktery formalne, dyscypliny, języki i pozostałe słowniki BPP.",
  },
  {
    icon: Terminal,
    title: "Zapytania zaawansowane",
    description:
      "Zapytania DjangoQL dla zalogowanych redaktorów — złożone kryteria, których nie da się wyklikać w interfejsie.",
  },
]

const examples = [
  {
    icon: Users,
    prompt:
      "Przygotuj sylwetkę naukową prof. [Nazwisko] na podstawie całego dorobku w BPP: obszary badań, najważniejsze publikacje, główne czasopisma, dynamikę w czasie i pozycję autorską. Złóż to w estetyczną, gotową do druku kartę.",
    answer:
      "W odpowiedzi: wielostronicowy dokument z wykresem aktywności, rankingiem czasopism, siecią współpracy i uczciwą notą metodyczną — gotowy do wniosku, sprawozdania albo strony jednostki.",
    image: {
      src: "/images/bpp-ai/sylwetka_naukowca.png",
      width: 2160,
      height: 5188,
      alt: "Sylwetka naukowca złożona z danych BPP: metryki dorobku, wykres aktywności 1988–2026, główne obszary badań, ranking czasopism, najwyżej punktowane prace, sieć współpracy i pozycja autorska.",
    },
  },
  {
    icon: Building2,
    prompt:
      "Złóż sylwetkę Kliniki Nefrologii: dorobek w liczbach, czołowych autorów, najważniejsze prace, dynamikę w czasie i wstępną gotowość do ewaluacji. Gotowe do druku.",
    answer:
      "W odpowiedzi: karta jednostki — statystyki, ranking autorów, struktura dorobku i wstępny obraz pod limit 3N do weryfikacji przez zespół.",
    image: {
      src: "/images/bpp-ai/sylwetka_jednostki.png",
      width: 2160,
      height: 4850,
      alt: "Sylwetka jednostki złożona z danych BPP: dorobek w liczbach, wykres aktywności 2014–2025, czołowi autorzy, struktura publikacji, najważniejsze prace oraz panel gotowości do ewaluacji pod limit 3N.",
    },
  },
  {
    icon: LineChart,
    prompt:
      "Pokaż, jak w ostatnich pięciu latach zmieniał się udział publikacji w otwartym dostępie w poszczególnych jednostkach. Przedstaw to na wykresie i wskaż jednostki z największym wzrostem.",
    answer: "W odpowiedzi: wykres trendu w czasie i uszeregowane zestawienie jednostek.",
    image: {
      src: "/images/bpp-ai/pytanie1_open_access.png",
      width: 2160,
      height: 2864,
      alt: "Wykres udziału Open Access rok po roku oraz ranking jednostek z największym wzrostem, każda z pięcioletnim przebiegiem.",
    },
  },
  {
    icon: Table2,
    prompt:
      "Wypisz czasopisma, w których najczęściej publikują pracownicy wybranej jednostki, wraz z liczbą prac i średnią punktacją.",
    answer: "W odpowiedzi: tabela zbiorcza, gotowa do wklejenia do sprawozdania.",
    image: {
      src: "/images/bpp-ai/pytanie2_czasopisma.png",
      width: 2160,
      height: 2606,
      alt: "Tabela czasopism jednostki: nazwa, ISSN, liczba prac, średnia punktacja i suma punktów.",
    },
  },
  {
    icon: ListChecks,
    prompt:
      "Znajdź publikacje z ostatnich dwóch lat, które nie mają przypisanej dyscypliny, i pogrupuj je według jednostek.",
    answer: "W odpowiedzi: lista rekordów do uzupełnienia — kontrola jakości danych przed ewaluacją.",
    image: {
      src: "/images/bpp-ai/pytanie3_bez_dyscypliny.png",
      width: 2160,
      height: 6102,
      alt: "Lista publikacji bez przypisanej dyscypliny, pogrupowana według jednostek, z rokiem, typem i czasopismem.",
    },
  },
]

const privacyPoints = [
  {
    icon: Lock,
    title: "Twoje konto, Twoje uprawnienia",
    description:
      "Logujesz się własnym kontem BPP, w przeglądarce — asystent nie poznaje hasła. Zobaczy dokładnie to, co Ty widzisz w systemie, ani jednego rekordu więcej.",
  },
  {
    icon: EyeOff,
    title: "Tylko do odczytu",
    description:
      "Serwer nie tworzy, nie zmienia ani nie usuwa danych w BPP. Bez logowania działa wyłącznie na danych publicznych.",
  },
  {
    icon: ShieldCheck,
    title: "Serwer w Waszej instalacji",
    description:
      "Serwer MCP jest częścią Waszej instalacji BPP — nie pośredniczy w tym żaden serwer IPLWeb. Administrator może go wyłączyć jednym przełącznikiem w ustawieniach uczelni.",
  },
  {
    icon: Cloud,
    title: "Uczciwie o modelu językowym",
    description:
      "Dane pobrane z BPP trafiają do modelu AI, z którego korzystacie — tak samo jak każdy tekst wklejony do czatu. Warto to uwzględnić w polityce uczelni przed pracą na danych niepublicznych.",
  },
]

function Code({ children }: { children: ReactNode }) {
  return <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">{children}</code>
}

export default function BppAiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 pb-12 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-6 animate-fade-in">
              <Sparkles className="mr-1 inline h-3.5 w-3.5" />
              Nowość · serwer MCP wbudowany w BPP
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Sztuczna inteligencja <span className="text-primary">w BPP</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Wasza bibliografia ma własny serwer MCP. Dopisz <strong className="text-foreground">/mcp</strong> do jej
              adresu — znajdziesz tam gotową instrukcję podłączenia do asystenta AI. Bez instalacji, bez konfigurowania
              serwerów.
            </p>

            <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.25s" }}>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border bg-background px-4 py-3 font-mono text-sm shadow-sm sm:px-6 sm:text-lg">
                <Globe className="h-4 w-4 shrink-0 text-muted-foreground sm:h-5 sm:w-5" aria-hidden="true" />
                <span className="min-w-0 break-all text-left">
                  <span className="text-muted-foreground">https://bpp.twoja-uczelnia.pl</span>
                  <span className="font-semibold text-primary">/mcp</span>
                </span>
              </div>
            </div>

            <div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button size="lg" asChild>
                <Link href="#podlaczenie">
                  <ArrowDown className="mr-2 h-5 w-5" />
                  Jak to podłączyć
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Poproś o pomoc we wdrożeniu</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Podłączenie przez /mcp */}
        <section id="podlaczenie" className="scroll-mt-20 px-4 py-12 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Podłączenie w trzech krokach</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Serwer MCP to cienka warstwa między danymi BPP a modelem językowym. Sam nie jest sztuczną inteligencją —
                daje jej dostęp do danych, o które pytacie. W aktualnych wersjach BPP jest częścią systemu, więc nie
                trzeba niczego instalować.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
              {steps.map((step, index) => (
                <Card key={step.title} className="card-hover relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <step.icon className="h-10 w-10 text-primary mb-2" />
                      <span className="text-3xl font-bold text-muted-foreground/25">{index + 1}</span>
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <Bot className="h-9 w-9 text-primary mb-2" />
                  <CardTitle className="text-lg">Asystent przeczyta instrukcję sam</CardTitle>
                  <CardDescription className="text-pretty">
                    Strona pod <Code>/mcp</Code> jest pisana także dla maszyn: parametry serwera, gotowe polecenia
                    i wpisy konfiguracyjne. Asystentowi z dostępem do internetu wystarczy podać adres — pobierze
                    instrukcję i sam skonfiguruje połączenie. Tak pobrana instrukcja podłącza dostęp publiczny; wariant
                    z logowaniem skopiujesz po zalogowaniu się w przeglądarce.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Plug className="h-9 w-9 text-primary mb-2" />
                  <CardTitle className="text-lg">Dwa adresy, jeden serwer</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2 text-pretty">
                      <li>
                        <Code>/mcp</Code> — dostęp publiczny, bez logowania. Działa z każdym narzędziem obsługującym
                        zdalne serwery MCP.
                      </li>
                      <li>
                        <Code>/mcp/auth</Code> — z logowaniem kontem BPP, także do danych niepublicznych. Obecnie
                        m.in. w Claude, Claude Code, Codex, Gemini CLI i LM Studio.
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-muted-foreground mb-3">Instrukcje pod /mcp obejmują m.in.:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {clients.map((client) => (
                  <Badge key={client} variant="outline" className="bg-background">
                    {client}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground max-w-2xl mx-auto text-pretty">
                Claude w przeglądarce i ChatGPT łączą się z serwerem z chmury swojego dostawcy — wtedy instalacja BPP
                musi być dostępna z internetu.
              </p>
            </div>
          </div>
        </section>

        {/* Po co to komu */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Po co i w jakim celu?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pytanie w pełni zasadne — system ma przecież raporty i wyszukiwarkę. Oto sześć sytuacji, w których AI
                naprawdę oszczędza czas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-stagger">
              {whyPoints.map((point) => (
                <Card key={point.title} className="card-hover">
                  <CardHeader>
                    <point.icon className="h-9 w-9 text-primary mb-2" />
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                    <CardDescription>{point.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Przykład */}
        <section className="px-4 py-12 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Przykładowe zapytania</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Od gotowej sylwetki naukowca czy całej jednostki po szybki wykres i tabelę — wszystko zwykłym zdaniem,
                bez znajomości struktury bazy i bez jednego eksportu do arkusza.
              </p>
            </div>

            <div className="space-y-4 animate-stagger">
              {examples.map((example) => (
                <Card key={example.prompt} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Quote className="h-4 w-4 text-primary" />
                      Pytanie zadane asystentowi
                    </div>
                    <blockquote className="mt-3 border-l-4 border-primary/40 pl-4 text-lg text-pretty italic">
                      „{example.prompt}”
                    </blockquote>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-start gap-2 text-sm text-muted-foreground text-pretty">
                      <example.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {example.answer}
                    </p>
                    {example.image && <CollapsibleFigure image={example.image} />}
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-foreground text-pretty">
              Każdą z tych analiz da się rzecz jasna wykonać ręcznie — porównując tabele i podpierając się Excelem.
              Pytanie brzmi raczej: ile to zajmie i czy zrobimy ją w ogóle. Zapytania są wyłącznie przykładami; równie
              dobrze mogą dotyczyć roku, dyscypliny, punktacji czy dowolnego innego przekroju danych.
            </p>
          </div>
        </section>

        {/* Co potrafi */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Co serwer udostępnia asystentowi</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Zestaw narzędzi, z których model korzysta samodzielnie, dobierając je do zadanego pytania — ten sam pod
                adresem /mcp i w samodzielnym BPP-MCP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
              {capabilities.map((capability) => (
                <Card key={capability.title} className="card-hover">
                  <CardHeader>
                    <capability.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bezpieczeństwo */}
        <section className="px-4 py-12 bg-muted/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Dane i bezpieczeństwo</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Najczęstsze pytanie działów IT — odpowiadamy na nie wprost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-stagger">
              {privacyPoints.map((point) => (
                <Card key={point.title} className="card-hover">
                  <CardHeader>
                    <point.icon className="h-9 w-9 text-primary mb-2" />
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                    <CardDescription>{point.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* BPP-MCP — samodzielny serwer */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">BPP-MCP — gdy adresu /mcp jeszcze nie ma</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Ten sam zestaw narzędzi jako osobny program, uruchamiany na Twoim komputerze. Łączy się z Waszą
                bibliografią przez API, a z asystentem rozmawia lokalnie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
              {bppMcpPoints.map((point) => (
                <Card key={point.title} className="card-hover">
                  <CardHeader>
                    <point.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                    <CardDescription>{point.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/iplweb/bpp-mcp" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Pobierz BPP-MCP
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://iplweb.github.io/bpp-mcp/" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Dokumentacja i konfiguracja klientów
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Czym jest umiejętność (skill) */}
        <section className="px-4 py-12 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Czym jest umiejętność (skill) dla asystenta</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Inna droga niż serwer MCP. Umiejętność (ang. <em>skill</em>) to nie program, lecz zestaw instrukcji,
                który wręczasz asystentowi. Czyta go w locie i pracę wykonuje sam — bez niczego uruchomionego w tle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
              {skillPoints.map((point) => (
                <Card key={point.title} className="card-hover">
                  <CardHeader>
                    <point.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                    <CardDescription>{point.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/iplweb/bpp-skills" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Zobacz umiejętności BPP
                </Link>
              </Button>
            </div>

            <div className="mt-10 rounded-lg border border-amber-300/60 bg-amber-50/60 p-5 text-sm text-pretty">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold mb-1">Oprogramowanie świeże i dynamicznie rozwijane</p>
                  <p className="text-muted-foreground">
                    Serwer MCP wbudowany w BPP, BPP-MCP oraz umiejętności BPP powstały niedawno i w nadchodzących
                    tygodniach mogą podlegać znacznym zmianom. BPP-MCP i umiejętności testowane były jak dotąd na
                    macOS — na pozostałych systemach operacyjnych liczcie się z drobnymi niespodziankami. Wszystkie
                    projekty są dostępne na licencji MIT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Chcecie to przetestować?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Sprawdzimy, czy Wasza instalacja ma już adres /mcp, pomożemy podłączyć asystenta i zadać mu pierwsze
              pytania. Chętnie też posłuchamy, jakich analiz szukacie — to one wyznaczają kierunek dalszego rozwoju.
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
