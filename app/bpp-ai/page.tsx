import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CodeBlock } from "@/components/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CollapsibleFigure } from "@/components/collapsible-figure"
import {
  Sparkles,
  Bot,
  Plug,
  Database,
  Search,
  Users,
  Building2,
  FileText,
  BookMarked,
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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Sztuczna inteligencja w BPP — serwer MCP | Bibliografia Publikacji Pracowników",
  description:
    "Podłącz swoją bazę BPP do asystenta AI. Serwer BPP-MCP pozwala pytać o dorobek naukowy własnymi słowami i otrzymywać zestawienia oraz wykresy, na które nie ma gotowego raportu.",
}

const flow = [
  {
    icon: Bot,
    title: "Asystent AI",
    description:
      "Aplikacja, z której korzystasz na co dzień — Claude (Cowork lub Code) albo ChatGPT (tryb Work lub Codex). To tutaj zadajesz pytanie zwykłym językiem.",
  },
  {
    icon: Plug,
    title: "Serwer BPP-MCP",
    description:
      "Niewielki program uruchamiany na Twoim komputerze. Tłumaczy pytania asystenta na wywołania API BPP i zwraca gotowe, rozwinięte dane — bez ręcznego klikania po tabelach.",
  },
  {
    icon: Database,
    title: "Twoja instalacja BPP",
    description:
      "Serwer łączy się z Waszą bazą przez publiczne API — po zalogowaniu Twoim własnym kontem BPP, z Twoimi uprawnieniami i wyłącznie do odczytu.",
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
      "Logujesz się własnym loginem BPP. Asystent zobaczy dokładnie to, co Ty widzisz w systemie — ani jednego rekordu więcej.",
  },
  {
    icon: EyeOff,
    title: "Tylko do odczytu",
    description:
      "Serwer nie tworzy, nie zmienia ani nie usuwa danych w BPP. Bez logowania działa wyłącznie na danych publicznych.",
  },
  {
    icon: ShieldCheck,
    title: "Działa u Ciebie",
    description:
      "Program uruchamiany jest na Twoim komputerze i łączy się bezpośrednio z Waszą instalacją BPP. Nie pośredniczy w tym żaden serwer IPLWeb.",
  },
  {
    icon: Cloud,
    title: "Uczciwie o modelu językowym",
    description:
      "Dane pobrane z BPP trafiają do modelu AI, z którego korzystacie — tak samo jak każdy tekst wklejony do czatu. Warto to uwzględnić w polityce uczelni przed pracą na danych niepublicznych.",
  },
]
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
              Nowość · oprogramowanie w rozwoju
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Sztuczna inteligencja <span className="text-primary">w BPP</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <strong>BPP-MCP</strong> podłącza Waszą bazę do asystenta AI. Pytasz o dorobek naukowy własnymi słowami —
              i dostajesz zestawienie, wykres albo gotowy raport tam, gdzie do tej pory zostawał eksport do Excela.
            </p>
            <div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button size="lg" asChild>
                <Link href="https://github.com/iplweb/bpp-mcp" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Pobierz BPP-MCP
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Poproś o pomoc we wdrożeniu</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Jak to działa */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Czym jest serwer MCP</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                To cienka warstwa pośrednicząca między API Waszego BPP a modelem językowym. Sam nie jest sztuczną
                inteligencją — daje jej dostęp do danych, o które pytacie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
              {flow.map((step, index) => (
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
          </div>
        </section>

        {/* Po co to komu */}
        <section className="px-4 py-12 bg-muted/20">
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
        <section className="px-4 py-12">
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
        <section className="px-4 py-12 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Co serwer udostępnia asystentowi</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Zestaw narzędzi, z których model korzysta samodzielnie, dobierając je do zadanego pytania.
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
        <section className="px-4 py-12">
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

        {/* Dwie drogi */}
        <section className="px-4 py-12 bg-muted/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Dwie drogi do wyboru</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pełna integracja albo lżejszy wariant — zależnie od tego, ile chcecie instalować.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-stagger">
              <Card className="card-hover flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Plug className="h-10 w-10 text-primary mb-2" />
                    <Badge className="border-transparent bg-green-100 text-green-700 hover:bg-green-100">
                      pełna integracja
                    </Badge>
                  </div>
                  <CardTitle>BPP-MCP — serwer MCP</CardTitle>
                  <CardDescription>
                    Asystent samodzielnie odpytuje bazę: wyszukuje, pobiera rekordy, przechodzi po relacjach i stronicuje
                    wyniki. Obsługuje logowanie do BPP i zapytania zaawansowane. Wymaga jednorazowej instalacji.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <CodeBlock>uvx --from git+https://github.com/iplweb/bpp-mcp bpp-mcp</CodeBlock>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://github.com/iplweb/bpp-mcp" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Instrukcja instalacji i konfiguracji
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <BookMarked className="h-10 w-10 text-primary mb-2" />
                    <Badge variant="secondary">prostszy wariant</Badge>
                  </div>
                  <CardTitle>BPP Skills — umiejętności</CardTitle>
                  <CardDescription>
                    Zestaw instrukcji, który „uczy” asystenta, jak rozmawiać z API BPP — bez uruchamiania osobnego
                    programu. Wystarczy skopiować katalog z umiejętnością. Dobry punkt startu, jeśli chcecie tylko
                    sprawdzić, o co w tym wszystkim chodzi.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <CodeBlock>git clone https://github.com/iplweb/bpp-skills.git</CodeBlock>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://github.com/iplweb/bpp-skills" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Zobacz umiejętności BPP
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-lg border border-amber-300/60 bg-amber-50/60 p-5 text-sm text-pretty">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold mb-1">Oprogramowanie świeże i dynamicznie rozwijane</p>
                  <p className="text-muted-foreground">
                    Serwer MCP oraz umiejętności BPP powstały niedawno i w nadchodzących tygodniach mogą podlegać
                    znacznym zmianom. Testy prowadzone były jak dotąd na macOS — na pozostałych systemach operacyjnych
                    liczcie się z drobnymi niespodziankami. Obydwa projekty są dostępne na licencji MIT.
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
              Pomożemy z instalacją, konfiguracją i pierwszymi pytaniami do bazy. Chętnie też posłuchamy, jakich analiz
              szukacie — to one wyznaczają kierunek dalszego rozwoju.
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
