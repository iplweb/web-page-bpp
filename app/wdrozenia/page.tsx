import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Users, Info, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function WdrozeniaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-900 mb-4 text-balance">Przykłady wdrożeń</h1>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto text-pretty">
              System Bibliografia Publikacji Pracowników jest z powodzeniem wykorzystywany w polskich instytucjach
              naukowych do zarządzania dorobkiem naukowym.
            </p>
          </div>

          {/* Informacja o VPN */}
          <div className="mb-12">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Info className="h-6 w-6 text-amber-600" />
                  <CardTitle className="text-amber-900">Informacja o wdrożeniach</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  Wielu naszych klientów korzysta z oprogramowania za VPN lub w sieciach wewnętrznych, co uniemożliwia
                  publiczne prezentowanie pełnej listy wszystkich wdrożeń. Poniżej przedstawiamy wybrane przykłady
                  instytucji, które zgodziły się na publiczne udostępnienie informacji o wykorzystaniu systemu BPP.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Przykłady wdrożeń */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Uniwersytet Medyczny w Lublinie */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm">
                    <Image
                      src="/images/logo-umlub-official.png"
                      alt="Logo Uniwersytet Medyczny w Lublinie"
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-amber-900">Uniwersytet Medyczny w Lublinie</CardTitle>
                    <CardDescription>Uczelnia medyczna</CardDescription>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Building2 className="w-3 h-3 mr-1" />
                    Uniwersytet
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Users className="w-3 h-3 mr-1" />
                    Sektor medyczny
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Kompleksowe zarządzanie dorobkiem naukowym pracowników uczelni medycznej, integracja z systemami
                  krajowymi i międzynarodowymi.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div>• Zarządzanie publikacjami naukowymi</div>
                  <div>• Integracja z PBN</div>
                  <div>• Raporty ewaluacyjne</div>
                </div>
                <Button asChild className="w-full">
                  <a href="https://bpp.umlub.pl" target="_blank" rel="noopener noreferrer">
                    Odwiedź system BPP UMLUB
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Uniwersytet Przyrodniczy w Lublinie */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm">
                    <Image
                      src="/images/logo-up-official.png"
                      alt="Logo Uniwersytet Przyrodniczy w Lublinie"
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-amber-900">Uniwersytet Przyrodniczy w Lublinie</CardTitle>
                    <CardDescription>Uniwersytet</CardDescription>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Building2 className="w-3 h-3 mr-1" />
                    Uniwersytet
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Users className="w-3 h-3 mr-1" />
                    Nauki przyrodnicze
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Zarządzanie dorobkiem naukowym w obszarze nauk przyrodniczych i rolniczych, wsparcie procesów
                  ewaluacyjnych.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div>• Katalogowanie publikacji</div>
                  <div>• Współpraca z PBN</div>
                  <div>• Analiza dorobku naukowego</div>
                </div>
                <Button asChild className="w-full">
                  <a href="https://publikacje.up.lublin.pl/" target="_blank" rel="noopener noreferrer">
                    Odwiedź system publikacji UP
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Statystyki */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Aktywnych wdrożeń</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Typów instytucji</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Zadowolonych klientów</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Dostępność systemu</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
