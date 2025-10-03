"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"
import { Users, Building, Mail, CheckCircle, Calendar } from "lucide-react"
import { sendContactForm } from "../actions/send-email"

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    position: "",
    phone: "",
    institutionType: "",
    plannedDeploymentDate: "",
    description: "",
    hasCurrentSystem: false,
    needsMigration: false,
    needsPbnMigration: false,
    hasInstitutionalLogin: false,
    agreedToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactForm(formData)

      if (result.success) {
        alert("Dziękujemy za zgłoszenie! Skontaktujemy się z Państwem w ciągu 24 godzin.")

        setFormData({
          name: "",
          email: "",
          institution: "",
          position: "",
          phone: "",
          institutionType: "",
          plannedDeploymentDate: "",
          description: "",
          hasCurrentSystem: false,
          needsMigration: false,
          needsPbnMigration: false,
          hasInstitutionalLogin: false,
          agreedToTerms: false,
        })
      } else {
        alert(
          result.error ||
            "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.",
        )
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              Wersja demonstracyjna
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Wypróbuj system BPP</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Przetestuj wszystkie funkcje systemu w bezpłatnej wersji demonstracyjnej lub złóż wniosek o utworzenie
              dedykowanego serwisu demo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Card className="h-full border-amber-200 bg-amber-50 animate-slide-in-left">
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-amber-600 mb-3" />
                  <CardTitle className="text-2xl text-amber-900">Kwestionariusz wdrożeniowy</CardTitle>
                  <CardDescription className="text-amber-800">
                    Zanim skontaktujesz się z nami, przemyśl poniższe kwestie - pomoże to w szybszym przygotowaniu
                    oferty
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">1. Hosting i infrastruktura</h4>
                    <p className="text-sm text-amber-800 mb-2 font-medium">Wybór hostingu to złożony temat</p>
                    <p className="text-sm text-amber-800">
                      Czy system ma być zainstalowany na serwerach Państwa instytucji, czy ma to przejąć firma IPL?
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">2. Zarządzanie kontami użytkowników</h4>
                    <p className="text-sm text-amber-800">
                      Jeżeli instytucja nie posiada logowania instytucjonalnego, osoby obsługujące system BPP muszą
                      samodzielnie zarządzać kontami użytkowników. Integracja z systemami OpenID/Office365/LDAP znacznie
                      ułatwia zarządzanie i zwiększa bezpieczeństwo.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">3. Import danych</h4>
                    <p className="text-sm text-amber-800">
                      Czy importujemy dane z PBN czy z innego systemu bibliograficznego? System BPP obsługuje różne
                      źródła danych i formaty importu.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">4. Podłączenie do PBN</h4>
                    <p className="text-sm text-amber-800">
                      Szczegółowe informacje o konfiguracji integracji z Polską Bibliografią Naukową znajdziesz na
                      stronie{" "}
                      <Link href="/pobierz" className="text-amber-600 hover:text-amber-700 underline">
                        "Pobierz"
                      </Link>
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">5. Dane kadrowe</h4>
                    <p className="text-sm text-amber-800">
                      Przygotuj arkusz XLS zawierający dane pracowników - imię, nazwisko, zakład/dział/klinika/katedra
                      zatrudniająca daną osobę (takich danych nie ma w PBN).
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">6. Raporty</h4>
                    <p className="text-sm text-amber-800 mb-2 font-medium">Nieograniczone możliwości dostosowania</p>
                    <p className="text-sm text-amber-800">
                      System BPP oferuje pełną elastyczność w tworzeniu raportów dostosowanych do specyficznych potrzeb
                      Państwa instytucji. Możliwe są analizy bibliometryczne, raporty ewaluacyjne, zestawienia dla władz
                      uczelni oraz automatyczne generowanie w określonych terminach.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full animate-slide-in-right">
                <CardHeader>
                  <Building className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-2xl">Dedykowany serwis demo</CardTitle>
                  <CardDescription>Zamów serwis demo dostosowany do Twojej uczelni</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* ... existing form fields ... */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Imię i nazwisko *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="institution">Nazwa uczelni/instytucji *</Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => handleInputChange("institution", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="position">Stanowisko</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="institutionType">Typ instytucji</Label>
                      <Select onValueChange={(value) => handleInputChange("institutionType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Wybierz typ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="university">Uniwersytet</SelectItem>
                          <SelectItem value="institute">Instytut</SelectItem>
                          <SelectItem value="research">Placówka badawczo-naukowa</SelectItem>
                          <SelectItem value="other-evaluated">Inny (podlegający ewaluacji)</SelectItem>
                          <SelectItem value="other-not-evaluated">Inny (nie podlegający ewaluacji)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="plannedDeploymentDate">Planowany termin wdrożenia</Label>
                      <Input
                        id="plannedDeploymentDate"
                        type="date"
                        value={formData.plannedDeploymentDate}
                        onChange={(e) => handleInputChange("plannedDeploymentDate", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Dodatkowe informacje</Label>
                      <Textarea
                        id="description"
                        placeholder="Opisz swoje potrzeby, obecny system, planowany termin wdrożenia..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasCurrentSystem"
                          checked={formData.hasCurrentSystem}
                          onCheckedChange={(checked) => handleInputChange("hasCurrentSystem", checked as boolean)}
                        />
                        <Label htmlFor="hasCurrentSystem" className="text-sm">
                          Posiadamy obecnie inny system do zarządzania publikacjami
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="needsMigration"
                          checked={formData.needsMigration}
                          onCheckedChange={(checked) => handleInputChange("needsMigration", checked as boolean)}
                        />
                        <Label htmlFor="needsMigration" className="text-sm">
                          Potrzebujemy migracji danych z obecnego systemu
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="needsPbnMigration"
                          checked={formData.needsPbnMigration}
                          onCheckedChange={(checked) => handleInputChange("needsPbnMigration", checked as boolean)}
                        />
                        <Label htmlFor="needsPbnMigration" className="text-sm">
                          Potrzebujemy migracji z PBN
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasInstitutionalLogin"
                          checked={formData.hasInstitutionalLogin}
                          onCheckedChange={(checked) => handleInputChange("hasInstitutionalLogin", checked as boolean)}
                        />
                        <Label htmlFor="hasInstitutionalLogin" className="text-sm">
                          Korzystamy z logowania instytucjonalnego OpenID/Office365/LDAP/inne
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreedToTerms"
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                          required
                        />
                        <Label htmlFor="agreedToTerms" className="text-sm">
                          Zgadzam się na przetwarzanie danych osobowych w celu kontaktu *
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      <Mail className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Wysyłanie..." : "Wyślij wniosek o demo"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Potrzebujesz więcej informacji?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić szczegóły wdrożenia lub uzyskać pomoc w testowaniu systemu. Oferujemy
              bezpłatne konsultacje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/kontakt">Skontaktuj się z nami</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://calendly.com/mpasternak/bpp-ewaluacja" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Umów spotkanie
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
