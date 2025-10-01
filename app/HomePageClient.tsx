"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Users, BarChart3, Database, Globe, Shield, Calendar } from "lucide-react"
import Image from "next/image"
import { RotatingText } from "@/components/rotating-text"

export default function HomePageClient() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8">
              <Image
                src="/images/logo-bpp-large.png"
                alt="Bibliografia Publikacji Pracowników - System zarządzania publikacjami naukowymi"
                width={600}
                height={200}
                className="mx-auto"
                priority
              />
            </div>

            <Badge variant="secondary" className="mb-6">
              Oprogramowanie Open Source
            </Badge>

            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Profesjonalny system informatyczny do katalogowania i zarządzania publikacjami pracowników jednostek
              naukowych. Rozwijany od kilkunastu lat. Modyfikowany pod najdrobniejsze zarządzenia Ministerstwa czy
              wahnięcia API PBNu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <Link href="/demo">Wypróbuj demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/o-systemie">Dowiedz się więcej</Link>
              </Button>
            </div>

            <RotatingText />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Kluczowe możliwości systemu</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompleksowe rozwiązanie do zarządzania dorobkiem naukowym pracowników uczelni
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Katalogowanie publikacji</CardTitle>
                  <CardDescription>
                    Dokumentowanie różnego typu publikacji: książki, artykuły, materiały konferencyjne
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Zarządzanie autorami</CardTitle>
                  <CardDescription>
                    Tworzenie wykazów dorobku naukowego pracowników przy awansach i konkursach
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Raporty i analizy</CardTitle>
                  <CardDescription>
                    Generowanie raportów dla jednostek, wydziałów i indywidualnych autorów
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Integracje zewnętrzne</CardTitle>
                  <CardDescription>Import z PubMed, Web of Science, eksport do PBN i POLON</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Dostęp przez WWW</CardTitle>
                  <CardDescription>Interfejs webowy dostępny z każdego urządzenia i przeglądarki</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Licencja MIT</CardTitle>
                  <CardDescription>Oprogramowanie open source bez dodatkowych opłat licencyjnych</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">System w liczbach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">lat rozwoju</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">MIT</div>
                <div className="text-muted-foreground">licencja open source</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">darmowy</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Gotowy na start?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Wypróbuj system w wersji demonstracyjnej lub skontaktuj się z nami w sprawie wdrożenia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com/mpasternak" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Umów spotkanie
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Wypróbuj demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Skontaktuj się</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
