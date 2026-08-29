"use client"

import { useEffect, useState, useCallback } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Copy, Check } from "lucide-react"
import Link from "next/link"

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  )
}

function TuxLogo({ className }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/tux.svg" alt="Linux" className={className} />
}

function WindowsLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className={className}>
      <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
    </svg>
  )
}

function detectOS(): "macos" | "linux" | "windows" {
  if (typeof navigator === "undefined") return "linux"
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes("mac")) return "macos"
  if (ua.includes("win")) return "windows"
  return "linux"
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false)
  const text = typeof children === "string" ? children : ""

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  return (
    <div className="bg-muted rounded-lg p-4 my-2 relative group">
      <code className="text-sm whitespace-pre-wrap pr-10">{children}</code>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-background/80 border border-border opacity-0 group-hover:opacity-100 transition-opacity"
        title="Kopiuj do schowka"
      >
        {copied ? <Check className="!h-4 !w-4 text-green-600" /> : <Copy className="!h-4 !w-4 text-muted-foreground" />}
      </button>
    </div>
  )
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold mb-2">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs mr-2">
          {number}
        </span>
        {title}
      </p>
      <div className="ml-8 text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

function AppShortcut({ src, label }: { src: string; label: string }) {
  return (
    <div className="mt-3 flex items-center gap-3 rounded-lg border border-border bg-card p-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`Ikona ${label}`} className="h-12 w-12 shrink-0" />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  )
}

type CloneVariant = "default" | "desktop" | "wsl"

function CloneAndRun({ stepStart, variant = "default" }: { stepStart: number; variant?: CloneVariant }) {
  return (
    <>
      <Step
        number={stepStart}
        title={
          variant === "desktop"
            ? "Sklonuj repozytorium wdrożeniowe na pulpit"
            : "Sklonuj repozytorium wdrożeniowe"
        }
      >
        {variant === "desktop" ? (
          <>
            <p>
              Git Bash startuje w katalogu domowym użytkownika, więc najpierw przejdź na
              pulpit — dzięki temu katalog{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">bpp-deploy</code>{" "}
              będziesz mieć zawsze pod ręką:
            </p>
            <CodeBlock>{"cd Desktop\ngit clone https://github.com/iplweb/bpp-deploy.git"}</CodeBlock>
            <p className="mt-2">
              Na dysku katalog pulpitu nazywa się{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">Desktop</code> także
              w polskiej wersji Windows. Jeśli <code className="bg-muted px-1.5 py-0.5 rounded text-xs">cd Desktop</code>{" "}
              zgłosi brak katalogu, pulpit przejął OneDrive — wpisz wtedy{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">cd OneDrive/Desktop</code>{" "}
              lub <code className="bg-muted px-1.5 py-0.5 rounded text-xs">cd OneDrive/Pulpit</code>.
            </p>
          </>
        ) : variant === "wsl" ? (
          <>
            <p>
              Trzymaj repozytorium w systemie plików Linuksa — katalog domowy Ubuntu jest
              do tego najlepszym miejscem:
            </p>
            <CodeBlock>{"cd ~\ngit clone https://github.com/iplweb/bpp-deploy.git"}</CodeBlock>
            <div className="mt-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
              <p className="text-amber-800 dark:text-amber-200 font-medium text-xs">
                Ważne: nie klonuj repozytorium do{" "}
                <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">/mnt/c/…</code>,
                czyli na dysk C:, pulpit czy do Dokumentów. Na granicy systemów plików Windows
                i Linuksa kontenery działają bardzo wolno, a uprawnienia plików nie przenoszą
                się poprawnie.
              </p>
            </div>
            <p className="mt-2">
              Do plików zajrzysz z Eksploratora — wpisz w Ubuntu{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">explorer.exe .</code>{" "}
              albo otwórz ścieżkę{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">{"\\\\wsl$\\Ubuntu\\home"}</code>.
            </p>
          </>
        ) : (
          <CodeBlock>git clone https://github.com/iplweb/bpp-deploy.git</CodeBlock>
        )}
      </Step>

      <Step number={stepStart + 1} title="Przejdź do katalogu i uruchom system">
        <CodeBlock>{"cd bpp-deploy\nmake"}</CodeBlock>
        <p className="mt-2">
          Komenda <code className="bg-muted px-1.5 py-0.5 rounded text-xs">make</code> automatycznie
          utworzy konfigurację, wygeneruje hasła i przygotuje system do uruchomienia.
        </p>
      </Step>

      <Step number={stepStart + 2} title="Dalsze kroki">
        <p>
          Konfiguracja hosta, certyfikaty SSL, uruchomienie usług, monitoring i backupy opisane są w{" "}
          <Link
            href="https://iplweb.github.io/bpp-deploy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            pełnej dokumentacji wdrożenia bpp-deploy
          </Link>
          {" "}— tam zawsze znajdziesz najświeższą instrukcję budowania i instalacji.
        </p>
      </Step>
    </>
  )
}

export function InstallationTabs() {
  const [activeTab, setActiveTab] = useState("linux")

  useEffect(() => {
    setActiveTab(detectOS())
  }, [])

  return (
    <div className="installation-tabs">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-3 !h-auto bg-transparent gap-3 p-0">
          <TabsTrigger
            value="macos"
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-4 py-5 shadow-sm transition-colors data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:shadow-md"
          >
            <AppleLogo className="!h-16 !w-16" />
            <span className="text-sm font-semibold">macOS</span>
          </TabsTrigger>
          <TabsTrigger
            value="linux"
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-4 py-5 shadow-sm transition-colors data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:shadow-md"
          >
            <TuxLogo className="!h-16 !w-16" />
            <span className="text-sm font-semibold">Linux</span>
          </TabsTrigger>
          <TabsTrigger
            value="windows"
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-4 py-5 shadow-sm transition-colors data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:shadow-md"
          >
            <WindowsLogo className="!h-16 !w-16" />
            <span className="text-sm font-semibold">Windows</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="macos" className="mt-4">
          <Step number={1} title="Zainstaluj Xcode Command Line Tools">
            <p>Zawiera Git i Make — otwórz Terminal i wpisz:</p>
            <CodeBlock>xcode-select --install</CodeBlock>
          </Step>

          <Step number={2} title="Zainstaluj Docker Desktop">
            <p>
              Pobierz i zainstaluj{" "}
              <Link
                href="https://www.docker.com/products/docker-desktop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Docker Desktop dla macOS
              </Link>
              {" "}— zawiera Docker Engine i Docker Compose.
            </p>
          </Step>

          <CloneAndRun stepStart={3} />
        </TabsContent>

        <TabsContent value="linux" className="mt-4">
          <Step number={1} title="Zainstaluj narzędzia systemowe">
            <p>Na Debian/Ubuntu otwórz terminal i wpisz:</p>
            <CodeBlock>sudo apt update && sudo apt install -y git make openssl</CodeBlock>
          </Step>

          <Step number={2} title="Zainstaluj Docker Engine">
            <p>
              Postępuj zgodnie z oficjalną instrukcją dla{" "}
              <Link
                href="https://docs.docker.com/engine/install/ubuntu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Ubuntu
              </Link>
              {" "}lub{" "}
              <Link
                href="https://docs.docker.com/engine/install/debian/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Debian
              </Link>
              . Alternatywnie, po sklonowaniu repozytorium możesz użyć:
            </p>
            <CodeBlock>make install-docker</CodeBlock>
          </Step>

          <CloneAndRun stepStart={3} />
        </TabsContent>

        <TabsContent value="windows" className="mt-4">
          <div className="mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
            <p className="font-semibold text-foreground">Najprościej: przez WSL2</p>
            <p className="mt-1 text-muted-foreground">
              WSL2 to wbudowany w Windows podsystem Linuksa. Aby uruchomić BPP na Windows,
              potrzebujesz zainstalować Docker Desktop, który i tak z niego korzysta.
            </p>
          </div>

          <Step number={1} title="Włącz WSL2 (Windows Subsystem for Linux)">
            <p>
              Kliknij prawym przyciskiem na przycisk Start, wybierz{" "}
              <strong>Terminal (Administrator)</strong> (na Windows 10:{" "}
              <strong>Windows PowerShell (Administrator)</strong>) i wpisz:
            </p>
            <CodeBlock>wsl --install</CodeBlock>
            <p className="mt-2">
              Komenda włącza{" "}
              <Link
                href="https://learn.microsoft.com/pl-pl/windows/wsl/install"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                WSL2
              </Link>
              {" "}i instaluje dystrybucję Ubuntu, po czym prosi o restart komputera. Jeśli WSL
              jest już włączony, nic nie zepsuje — po prostu to zgłosi (stan sprawdzisz też
              przez <code className="bg-muted px-1.5 py-0.5 rounded text-xs">wsl --status</code>).
            </p>
            <div className="mt-3 bg-muted rounded-lg border border-border p-3 text-xs">
              <p>
                Wymagany jest Windows 11 albo Windows 10 w wersji 2004 (build 19041) lub
                nowszej, z włączoną wirtualizacją w BIOS/UEFI — dokładnie te same wymagania,
                co Docker Desktop. Na starszych wydaniach WSL2 trzeba doinstalować{" "}
                <Link
                  href="https://learn.microsoft.com/pl-pl/windows/wsl/install-manual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  ręcznie
                </Link>
                .
              </p>
            </div>
          </Step>

          <Step number={2} title="Zainstaluj Docker Desktop i połącz go z Ubuntu">
            <p>
              Otwórz <strong>PowerShell</strong> — naciśnij klawisz Windows, zacznij pisać{" "}
              <strong>powershell</strong> i kliknij aplikację <strong>Windows PowerShell</strong>:
            </p>
            <AppShortcut src="/powershell-icon.png" label="Windows PowerShell" />
            <p className="mt-3">W otwartym oknie wklej:</p>
            <CodeBlock>winget install -e --id Docker.DockerDesktop --source winget</CodeBlock>
            <p className="mt-2">
              Uruchom Docker Desktop z menu Start i poczekaj, aż ikona wieloryba w zasobniku
              systemowym przestanie się animować. Następnie wejdź w{" "}
              <strong>Settings → Resources → WSL Integration</strong> i włącz suwak przy
              dystrybucji <strong>Ubuntu</strong> — dzięki temu komendy{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">docker</code> i{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">docker compose</code>{" "}
              zadziałają wprost w Ubuntu, korzystając z tego samego silnika.
            </p>
            <div className="mt-3 bg-muted rounded-lg border border-border p-3 text-xs">
              <p>
                <code className="bg-background px-1 rounded">winget</code> jest wbudowany
                w Windows 11 oraz w Windows 10 od wersji 1809 (build 17763). Jeśli komenda
                nie zadziała, pobierz{" "}
                <Link
                  href="https://www.docker.com/products/docker-desktop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Docker Desktop for Windows
                </Link>
                {" "}ręcznie ze strony producenta.
              </p>
            </div>
          </Step>

          <Step number={3} title="Otwórz Ubuntu">
            <p>
              Kliknij w pasek wyszukiwania obok przycisku Start (albo naciśnij klawisz
              Windows), wpisz <strong>ubuntu</strong> i kliknij aplikację:
            </p>
            <AppShortcut src="/ubuntu-icon.svg" label="Ubuntu" />
            <div className="mt-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
              <p className="text-amber-800 dark:text-amber-200 font-medium text-xs">
                Nie widzisz ikony Ubuntu? Zrestartuj komputer. Instalacja WSL2 z kroku 1
                kończy się dopiero po ponownym uruchomieniu systemu — wcześniej Ubuntu nie
                pojawi się w menu Start.
              </p>
            </div>
            <p className="mt-3">
              Przy pierwszym uruchomieniu Ubuntu poprosi o nazwę użytkownika i hasło — to
              konto wewnątrz Linuksa, niezależne od konta Windows. Hasło zapamiętaj, będzie
              potrzebne przy <code className="bg-muted px-1.5 py-0.5 rounded text-xs">sudo</code>.
            </p>
          </Step>

          <Step number={4} title="Zainstaluj narzędzia systemowe">
            <p>W oknie Ubuntu wpisz:</p>
            <CodeBlock>sudo apt update && sudo apt install -y git make openssl</CodeBlock>
            <p className="mt-2">
              Od tego momentu instalacja przebiega dokładnie tak, jak na Linuksie — bo to
              jest Linux.
            </p>
          </Step>

          <CloneAndRun stepStart={5} variant="wsl" />

          <details className="mt-8 rounded-lg border border-border bg-card p-4">
            <summary className="cursor-pointer text-sm font-semibold">
              Wolę zostać po stronie Windows — instalacja przez Git Bash
            </summary>
            <div className="mt-4">
              <p className="mb-6 text-sm text-muted-foreground">
                Ta ścieżka też wymaga WSL2 — Docker Desktop bez niego nie działa, więc
                krok 1 powyżej wykonaj również tutaj. Różnica polega na tym, że{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-xs">make</code> uruchamiasz
                w Git Bashu po stronie Windows, a nie w Ubuntu.
              </p>

              <Step number={1} title="Zainstaluj komplet narzędzi jedną komendą">
                <p>
                  Otwórz <strong>PowerShell</strong> — naciśnij klawisz Windows, zacznij pisać{" "}
                  <strong>powershell</strong> i kliknij aplikację <strong>Windows PowerShell</strong>:
                </p>
                <AppShortcut src="/powershell-icon.png" label="Windows PowerShell" />
                <p className="mt-3">W otwartym oknie wklej poniższe komendy:</p>
                <CodeBlock>{"winget install -e --id Git.Git --source winget\nwinget install -e --id Docker.DockerDesktop --source winget\nwinget install -e --id ezwinports.make --source winget"}</CodeBlock>
                <p className="mt-2">
                  To komplet potrzebnych narzędzi:{" "}
                  <Link
                    href="https://gitforwindows.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Git for Windows
                  </Link>
                  {" "}(Git Bash z narzędziami Unix — bash, grep, sed, openssl),{" "}
                  <Link
                    href="https://www.docker.com/products/docker-desktop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Docker Desktop
                  </Link>
                  {" "}(Docker Engine i Docker Compose) oraz{" "}
                  <Link
                    href="https://www.gnu.org/software/make/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    GNU Make
                  </Link>
                  {" "}4.4.
                </p>
                <div className="mt-3 bg-muted rounded-lg border border-border p-3 text-xs">
                  <p>
                    <code className="bg-background px-1 rounded">winget</code> jest wbudowany
                    w Windows 11 oraz w Windows 10 od wersji 1809 (build 17763), gdzie dostarcza go
                    „Instalator aplikacji”. Sprawdź komendą{" "}
                    <code className="bg-background px-1 rounded">winget --version</code>; jeśli
                    nie zadziała, zainstaluj lub zaktualizuj{" "}
                    <Link
                      href="https://apps.microsoft.com/detail/9nblggh4nns1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-4 hover:text-primary/80"
                    >
                      Instalator aplikacji
                    </Link>
                    {" "}ze Sklepu Microsoft.
                  </p>

                  <details className="mt-3 border-t border-border pt-3">
                    <summary className="font-semibold cursor-pointer">
                      Nie masz wingeta? (Windows 10 starszy niż 1809, zablokowany Sklep)
                    </summary>
                    <div className="mt-2 space-y-2">
                      <p>
                        Pobierz i zainstaluj ręcznie{" "}
                        <Link
                          href="https://gitforwindows.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline underline-offset-4 hover:text-primary/80"
                        >
                          Git for Windows
                        </Link>
                        {" "}oraz{" "}
                        <Link
                          href="https://www.docker.com/products/docker-desktop/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline underline-offset-4 hover:text-primary/80"
                        >
                          Docker Desktop for Windows
                        </Link>
                        .
                      </p>
                      <p>
                        GNU Make nie wymaga menedżera pakietów — to pojedynczy, samowystarczalny
                        plik. Pobierz{" "}
                        <Link
                          href="https://downloads.sourceforge.net/project/ezwinports/make-4.4.1-without-guile-w32-bin.zip"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline underline-offset-4 hover:text-primary/80"
                        >
                          make-4.4.1-without-guile-w32-bin.zip
                        </Link>
                        {" "}(392 KB, projekt ezwinports — ten sam plik, który instaluje winget),
                        rozpakuj i skopiuj{" "}
                        <code className="bg-background px-1 rounded">{"bin\\make.exe"}</code> do{" "}
                        <code className="bg-background px-1 rounded">{"C:\\Program Files\\Git\\usr\\bin\\"}</code>{" "}
                        (Windows poprosi o potwierdzenie administratora). Ten katalog jest już
                        w PATH Git Basha, a <code className="bg-background px-1 rounded">make.exe</code>{" "}
                        importuje wyłącznie systemowe biblioteki Windows, więc wystarczy ten jeden plik.
                      </p>
                      <p>
                        Jeśli i tak masz już{" "}
                        <Link
                          href="https://chocolatey.org/install"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline underline-offset-4 hover:text-primary/80"
                        >
                          Chocolatey
                        </Link>
                        {" "}albo{" "}
                        <Link
                          href="https://scoop.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline underline-offset-4 hover:text-primary/80"
                        >
                          Scoopa
                        </Link>
                        {" "}— wystarczy <code className="bg-background px-1 rounded">choco install make</code>{" "}
                        (PowerShell jako Administrator) lub{" "}
                        <code className="bg-background px-1 rounded">scoop install make</code>.
                      </p>
                    </div>
                  </details>
                </div>
              </Step>

              <Step number={2} title="Uruchom Docker Desktop">
                <p>
                  Uruchom go z menu Start i poczekaj, aż ikona wieloryba w zasobniku systemowym
                  przestanie się animować. Przy pierwszym uruchomieniu Docker sam sprawdzi WSL2
                  i — jeśli nie był jeszcze włączony — dokończy jego konfigurację, prosząc
                  o restart komputera.
                </p>
              </Step>

              <Step number={3} title="Otwórz nowe okno Git Bash">
                <p>
                  Kliknij w pasek wyszukiwania obok przycisku Start (albo naciśnij klawisz
                  Windows), wpisz <strong>git bash</strong>, a następnie kliknij aplikację{" "}
                  <strong>Git Bash</strong> — poznasz ją po kolorowym rombie:
                </p>
                <AppShortcut src="/git-bash-icon.png" label="Git Bash" />
                <div className="mt-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <p className="text-amber-800 dark:text-amber-200 font-medium text-xs">
                    Ważne: wszystkie komendy <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">make</code> uruchamiaj
                    w <strong>Git Bash</strong>, nie w CMD ani PowerShell. Otwórz świeże okno —
                    dopiero nowy terminal widzi <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">make</code> dopisany
                    do PATH przez winget.
                  </p>
                </div>
              </Step>

              <CloneAndRun stepStart={4} variant="desktop" />
            </div>
          </details>

        </TabsContent>
      </Tabs>
    </div>
  )
}
