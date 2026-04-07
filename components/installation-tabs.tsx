"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Apple, Monitor, Terminal } from "lucide-react"
import Link from "next/link"

function detectOS(): "macos" | "linux" | "windows" {
  if (typeof navigator === "undefined") return "linux"
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes("mac")) return "macos"
  if (ua.includes("win")) return "windows"
  return "linux"
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-muted rounded-lg p-4 my-2">
      <code className="text-sm">{children}</code>
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

function QuickStart() {
  return (
    <div className="mt-6 pt-6 border-t">
      <p className="text-sm font-semibold mb-3">Szybki start</p>
      <p className="text-sm text-muted-foreground mb-2">
        Po zainstalowaniu powyższych narzędzi, sklonuj repozytorium i uruchom system:
      </p>
      <CodeBlock>{"git clone https://github.com/iplweb/bpp-deploy.git && cd bpp-deploy && make"}</CodeBlock>
      <p className="text-sm text-muted-foreground mt-2">
        Komenda <code className="bg-muted px-1.5 py-0.5 rounded text-xs">make</code> automatycznie
        utworzy konfigurację, wygeneruje hasła i przygotuje system do uruchomienia.
      </p>
      <p className="text-sm text-muted-foreground mt-4">
        Dalsze kroki (konfiguracja, certyfikaty SSL, uruchomienie usług) opisane są w{" "}
        <Link
          href="https://github.com/iplweb/bpp-deploy?tab=readme-ov-file#3-sprawdź-i-dostosuj-konfigurację"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          dokumentacji repozytorium bpp-deploy
        </Link>
        {" "}— tam zawsze znajdziesz najświeższą instrukcję budowania i instalacji.
      </p>
    </div>
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
        <TabsList className="w-full grid grid-cols-3 h-auto">
          <TabsTrigger value="macos" className="gap-2 py-2.5">
            <Apple className="h-4 w-4" />
            macOS
          </TabsTrigger>
          <TabsTrigger value="linux" className="gap-2 py-2.5">
            <Terminal className="h-4 w-4" />
            Linux
          </TabsTrigger>
          <TabsTrigger value="windows" className="gap-2 py-2.5">
            <Monitor className="h-4 w-4" />
            Windows
          </TabsTrigger>
        </TabsList>

        <TabsContent value="macos" className="mt-6">
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

          <QuickStart />
        </TabsContent>

        <TabsContent value="linux" className="mt-6">
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

          <QuickStart />
        </TabsContent>

        <TabsContent value="windows" className="mt-6">
          <Step number={1} title="Zainstaluj Git for Windows">
            <p>
              Pobierz i zainstaluj{" "}
              <Link
                href="https://gitforwindows.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Git for Windows
              </Link>
              {" "}— dostarcza Git Bash z narzędziami Unix (bash, grep, sed, openssl).
            </p>
          </Step>

          <Step number={2} title="Zainstaluj Docker Desktop">
            <p>
              Pobierz i zainstaluj{" "}
              <Link
                href="https://docs.docker.com/desktop/install/windows-install/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Docker Desktop for Windows
              </Link>
              {" "}— zawiera Docker Engine i Docker Compose.
            </p>
          </Step>

          <Step number={3} title="Zainstaluj GNU Make">
            <p>
              Najprościej przez{" "}
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
          </Step>

          <Step number={4} title="Używaj Git Bash">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
              <p className="text-amber-800 dark:text-amber-200 font-medium text-xs">
                Ważne: wszystkie komendy <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">make</code> uruchamiaj
                w <strong>Git Bash</strong>, nie w CMD ani PowerShell.
              </p>
            </div>
          </Step>

          <QuickStart />
        </TabsContent>
      </Tabs>
    </div>
  )
}
