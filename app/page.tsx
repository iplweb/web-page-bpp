"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Users, BarChart3, Download, Upload, Network, Award, Globe, Shield, Calendar } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-2 px-4 text-center bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8 animate-fade-in">
              <Image
                src="/images/logo-bpp-large.png"
                alt="Bibliografia Publikacji Pracowników - System zarządzania publikacjami naukowymi"
                width={600}
                height={200}
                className="mx-auto"
                priority
              />
            </div>

            <Badge variant="secondary" className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Oprogramowanie Open Source
            </Badge>

            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Profesjonalny system informatyczny do katalogowania i zarządzania publikacjami pracowników jednostek
              naukowych. Rozwijany od kilkunastu lat. Modyfikowany pod najdrobniejsze zarządzenia Ministerstwa czy
              wahnięcia API PBNu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" asChild>
                <Link href="/demo">Wypróbuj demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/o-systemie">Dowiedz się więcej</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="pt-2 pb-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Image
                src="/images/bpp-integracje.png"
                alt="Schemat wymiany danych BPP — wejścia (zgłoszenia przez formularz, PBN, CrossRef, Web of Science, DSpace), BPP jako centralny hub informacji naukowej, oraz wyjścia (PBN, OAI-PMH, API, DSpace, raporty dla uczelni, ewaluacja z optymalizacją, wizualizacje, profile naukowców, strona WWW instytucji)"
                width={2560}
                height={2000}
                className="mx-auto mb-10 w-full max-w-4xl h-auto rounded-xl shadow-sm"
              />
              <h2 className="text-3xl font-bold mb-4">Kluczowe możliwości systemu</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompleksowe rozwiązanie do zarządzania dorobkiem naukowym pracowników uczelni
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
              <Card className="card-hover">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Katalogowanie publikacji</CardTitle>
                  <CardDescription>
                    Dokumentowanie różnego typu publikacji: książki, artykuły, materiały konferencyjne
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Zarządzanie autorami</CardTitle>
                  <CardDescription>
                    Tworzenie wykazów dorobku naukowego pracowników przy awansach i konkursach
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Raporty i analizy</CardTitle>
                  <CardDescription>
                    Generowanie raportów dla jednostek, wydziałów i indywidualnych autorów
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Download className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Import danych</CardTitle>
                  <CardDescription>
                    Automatyczne pobieranie danych z krajowych i światowych źródeł
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">PBN</Badge>
                    <Badge variant="secondary">DSpace</Badge>
                    <Badge variant="secondary">CrossRef</Badge>
                    <Badge variant="secondary">Web of Science</Badge>
                    <Badge variant="secondary">BibTeX</Badge>
                    <Badge variant="secondary">Zgłoszenia prac</Badge>
                    <Badge variant="secondary">Inne</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Upload className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Eksport danych</CardTitle>
                  <CardDescription>
                    Udostępnianie i wymiana danych z systemami zewnętrznymi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">PBN</Badge>
                    <Badge variant="secondary">DSpace</Badge>
                    <Badge variant="secondary">JSON API</Badge>
                    <Badge variant="secondary">OAI-PMH</Badge>
                    <Badge variant="secondary">Strona WWW</Badge>
                    <Badge variant="secondary">BibTeX</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Network className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Federacje</CardTitle>
                  <CardDescription>
                    Obsługa wielu instytucji na jednej instalacji oprogramowania
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Wsparcie ewaluacji</CardTitle>
                  <CardDescription>
                    Automatyczna punktacja wg list MNiSW, analiza slotów i przygotowanie danych do ewaluacji
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Dostęp przez WWW</CardTitle>
                  <CardDescription>Interfejs webowy dostępny z każdego urządzenia i przeglądarki</CardDescription>
                </CardHeader>
              </Card>

              <Card className="card-hover">
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
            <h2 className="text-3xl font-bold mb-12 animate-fade-in">System w liczbach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
              <div className="bg-card p-8 rounded-lg border card-hover">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">lat rozwoju</div>
              </div>
              <div className="bg-card p-8 rounded-lg border card-hover">
                <div className="text-4xl font-bold text-primary mb-2">MIT</div>
                <div className="text-muted-foreground">licencja open source</div>
              </div>
              <div className="bg-card p-8 rounded-lg border card-hover">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">darmowy</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Gotowy na start?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Wypróbuj system w wersji demonstracyjnej lub skontaktuj się z nami w sprawie wdrożenia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com/mpasternak/bpp-ewaluacja" target="_blank" rel="noopener noreferrer">
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
