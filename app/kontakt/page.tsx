import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Headphones, Code, MessageSquare, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              Kontakt
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Skontaktuj się z nami</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Potrzebujesz pomocy z instalacją, konfiguracją lub rozwojem systemu BPP? Skorzystaj z profesjonalnego
              wsparcia komercyjnego.
            </p>
          </div>

          <div className="mb-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <Link
                    href="https://www.iplweb.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image src="/images/logo-iplweb.png" alt="IPLWeb" width={160} height={32} className="h-8 w-auto" />
                  </Link>
                </div>
                <Link
                  href="https://www.iplweb.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <CardTitle className="text-2xl">iplweb Michał Pasternak</CardTitle>
                </Link>
                <CardDescription className="text-lg">
                  Profesjonalne wsparcie techniczne i rozwój oprogramowania
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                    <Calendar className="h-8 w-8 text-primary mb-3" />
                    <div className="font-semibold mb-1">Spotkanie online</div>
                    <div className="text-sm">
                      <Link
                        href="https://calendly.com/mpasternak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Umów spotkanie
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                    <Phone className="h-8 w-8 text-primary mb-3" />
                    <div className="font-semibold mb-1">Telefon</div>
                    <div className="text-sm text-muted-foreground">
                      <Link href="tel:+48793668733" className="hover:text-primary transition-colors">
                        +48 793 668 733
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30">
                    <Mail className="h-8 w-8 text-primary mb-3" />
                    <div className="font-semibold mb-1">E-mail</div>
                    <div className="text-sm text-muted-foreground">
                      <Link href="mailto:michal.dtz@gmail.com" className="hover:text-primary transition-colors">
                        michal.dtz@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Rodzaje wsparcia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">Instalacja i konfiguracja</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Profesjonalna instalacja systemu na serwerze, konfiguracja i dostosowanie do potrzeb uczelni.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Headphones className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">Wsparcie techniczne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Bieżące wsparcie techniczne, rozwiązywanie problemów i pomoc w codziennym użytkowaniu systemu.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">Szkolenia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Przeznaczamy tyle czasu na szkolenia ile dana instytucja potrzebuje. Dostosowujemy program do
                    poziomu użytkowników.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">Rozwój oprogramowania</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Rozbudowa funkcjonalności, optymalizacja wydajności i dostosowanie do specyficznych wymagań.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">Migracja danych</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Przeniesienie danych z obecnego systemu informatycznego do BPP z zachowaniem integralności.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">Konsultacje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Doradztwo w zakresie optymalizacji procesów bibliograficznych i najlepszych praktyk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Potrzebujesz fachowej pomocy?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić szczegóły wdrożenia systemu BPP w Twojej uczelni. Oferujemy kompleksowe
              wsparcie od instalacji po szkolenia użytkowników.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://calendly.com/mpasternak" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Umów spotkanie
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:michal.dtz@gmail.com">Napisz e-mail</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+48793668733">Zadzwoń</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
