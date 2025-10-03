import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Mail, ExternalLink, Headphones, MessageCircle, Star, Clock, Users, CheckCircle } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              Wsparcie
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Wsparcie techniczne</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Oferujemy profesjonalne i szybkie wsparcie techniczne dla wszystkich użytkowników systemu BPP.
              Nasz zespół zawsze jest gotowy, aby pomóc rozwiązać każdy problem.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-hover animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-6 w-6 text-primary" />
                    <Badge variant="outline">Obecni klienci</Badge>
                  </div>
                  <CardTitle className="text-2xl">Wsparcie komercyjne</CardTitle>
                  <CardDescription className="text-lg">
                    Priorytetowe wsparcie dla klientów komercyjnych
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="mailto:support@iplweb.pl"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 card-hover hover:bg-muted/50 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">E-mail support</div>
                      <div className="text-sm text-primary">support@iplweb.pl</div>
                    </div>
                  </Link>

                  <Link
                    href="https://support.iplweb.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 card-hover hover:bg-muted/50 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Portal wsparcia</div>
                      <div className="text-sm text-primary hover:underline">support.iplweb.pl</div>
                    </div>
                  </Link>

                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-primary" />
                      <span className="font-medium">Priorytetowe wsparcie</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Szybki czas odpowiedzi, bezpośredni kontakt z autorem oprogramowania, gwarancja jakości i cena bez pośredników i rozbudowanego działu marketingu
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <Badge variant="outline">Przyszli klienci</Badge>
                  </div>
                  <CardTitle className="text-2xl">Wsparcie społeczności</CardTitle>
                  <CardDescription className="text-lg">
                    Wsparcie dla użytkowników wersji opensource
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="https://github.com/iplweb/bpp/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 card-hover hover:bg-muted/50 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Zgłoś issue</div>
                      <div className="text-sm text-primary hover:underline">GitHub Issues</div>
                    </div>
                  </Link>

                  <Link
                    href="https://bpp.readthedocs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 card-hover hover:bg-muted/50 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Dokumentacja</div>
                      <div className="text-sm text-primary hover:underline">bpp.readthedocs.org</div>
                    </div>
                  </Link>

                  <div className="mt-4 p-4 bg-muted/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="font-medium">Wsparcie społeczności</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pomoc od społeczności, dokumentacja, otwarty kod źródłowy
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Dlaczego warto skorzystać z naszego wsparcia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger max-w-6xl mx-auto">
              <Card className="text-center card-hover">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">Szybka reakcja</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Odpowiadamy na zgłoszenia w ciągu kilku godzin, a na pilne problemy natychmiast.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover">
                <CardHeader>
                  <Headphones className="h-12 w-12 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">Profesjonalna pomoc</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nasz zespół ma wieloletnie doświadczenie w obsłudze systemów bibliograficznych.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">Skuteczne rozwiązania</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nie tylko rozwiązujemy problemy, ale też doradzamy najlepsze praktyki.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover">
                <CardHeader>
                  <Star className="h-12 w-12 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">Zadowolenie klientów</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nasi klienci cenią nas za profesjonalizm i zaangażowanie w ich sprawy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Potrzebujesz pomocy?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Niezależnie od tego, czy jesteś obecnym, czy przyszłym klientem, zapewniamy profesjonalne wsparcie
              techniczne dostosowane do Twoich potrzeb. Jesteśmy tutaj, aby pomóc!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:support@iplweb.pl">
                  <Mail className="mr-2 h-5 w-5" />
                  Napisz do nas
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://support.iplweb.pl/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Portal wsparcia
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}