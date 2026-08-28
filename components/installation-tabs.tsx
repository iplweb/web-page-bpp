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

function CloneAndRun({ stepStart }: { stepStart: number }) {
  return (
    <>
      <Step number={stepStart} title="Sklonuj repozytorium wdrożeniowe">
        <CodeBlock>git clone https://github.com/iplweb/bpp-deploy.git</CodeBlock>
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
                href="https://docs.docker.com/desktop/install/mac-install/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Docker Desktop dla macOS
              </Link>
              {" "}— zawiera Docker Engine i Docker Compose.
            </p>
          </Step>

          <Step number={3} title="Zainstaluj envsubst">
            <p>
              Wymagane do generowania konfiguracji. Zainstaluj przez{" "}
              <Link
                href="https://brew.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Homebrew
              </Link>
              :
            </p>
            <CodeBlock>brew install gettext</CodeBlock>
          </Step>

          <CloneAndRun stepStart={4} />
        </TabsContent>

        <TabsContent value="linux" className="mt-4">
          <Step number={1} title="Zainstaluj narzędzia systemowe">
            <p>Na Debian/Ubuntu otwórz terminal i wpisz:</p>
            <CodeBlock>sudo apt update && sudo apt install -y git make openssl gettext</CodeBlock>
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
          <Step number={1} title="Zainstaluj komplet narzędzi jedną komendą">
            <p>
              Otwórz <strong>PowerShell</strong> (zwykły — instalator Dockera sam poprosi
              o uprawnienia administratora) i wklej:
            </p>
            <CodeBlock>{"winget install -e --id Git.Git\nwinget install -e --id Docker.DockerDesktop\nwinget install -e --id ezwinports.make"}</CodeBlock>
            <p className="mt-2">
              To komplet potrzebnych narzędzi: <strong>Git for Windows</strong> (Git Bash
              z narzędziami Unix — bash, grep, sed, openssl, envsubst),{" "}
              <strong>Docker Desktop</strong> (Docker Engine i Docker Compose) oraz{" "}
              <strong>GNU Make</strong> 4.4. Nie musisz instalować Chocolatey ani Scoopa.
            </p>
            <div className="mt-3 bg-muted rounded-lg border border-border p-3">
              <p className="text-xs">
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
            </div>
          </Step>

          <Step number={2} title="Uruchom Docker Desktop">
            <p>
              Uruchom go z menu Start i poczekaj, aż ikona wieloryba w zasobniku systemowym
              przestanie się animować. Pierwsze uruchomienie może włączyć WSL2 i poprosić
              o restart komputera.
            </p>
          </Step>

          <Step number={3} title="Otwórz nowe okno Git Bash">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
              <p className="text-amber-800 dark:text-amber-200 font-medium text-xs">
                Ważne: wszystkie komendy <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">make</code> uruchamiaj
                w <strong>Git Bash</strong>, nie w CMD ani PowerShell. Otwórz świeże okno —
                dopiero nowy terminal widzi <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">make</code> dopisany
                do PATH przez winget.
              </p>
            </div>
          </Step>

          <CloneAndRun stepStart={4} />

          <details className="mt-8 rounded-lg border border-border bg-card p-4">
            <summary className="text-sm font-semibold cursor-pointer">
              Nie masz winget? (Windows 10 starszy niż 1809, zablokowany Sklep)
            </summary>
            <div className="mt-3 text-sm text-muted-foreground">
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
                  href="https://docs.docker.com/desktop/install/windows-install/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Docker Desktop for Windows
                </Link>
                , a GNU Make zainstaluj w PowerShellu jako Administrator przez{" "}
                <Link
                  href="https://chocolatey.org/install"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Chocolatey
                </Link>
                :
              </p>
              <CodeBlock>choco install make</CodeBlock>
              <p className="mt-2">
                lub przez{" "}
                <Link
                  href="https://scoop.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Scoop
                </Link>
                :
              </p>
              <CodeBlock>scoop install make</CodeBlock>
            </div>
          </details>
        </TabsContent>
      </Tabs>
    </div>
  )
}
