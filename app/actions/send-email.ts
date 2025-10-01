"use server"

import emailjs from "@emailjs/nodejs"

export async function sendContactForm(formData: {
  name: string
  email: string
  institution: string
  position: string
  phone: string
  institutionType: string
  plannedDeploymentDate: string
  description: string
  hasCurrentSystem: boolean
  needsMigration: boolean
  needsPbnMigration: boolean
  hasInstitutionalLogin: boolean
}) {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY

    console.log("[v0] Environment variables check:")
    console.log("[v0] EMAILJS_SERVICE_ID:", serviceId ? `Set (${serviceId.substring(0, 8)}...)` : "NOT SET")
    console.log("[v0] EMAILJS_TEMPLATE_ID:", templateId ? `Set (${templateId.substring(0, 8)}...)` : "NOT SET")
    console.log("[v0] EMAILJS_PUBLIC_KEY:", publicKey ? `Set (${publicKey.substring(0, 8)}...)` : "NOT SET")

    if (!serviceId || !templateId || !publicKey) {
      console.error("[v0] Missing EmailJS environment variables")
      return { success: false, error: "Brak konfiguracji EmailJS - sprawdź zmienne środowiskowe" }
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      institution: formData.institution,
      position: formData.position,
      phone: formData.phone,
      institution_type: formData.institutionType,
      planned_deployment: formData.plannedDeploymentDate,
      description: formData.description,
      has_current_system: formData.hasCurrentSystem ? "Tak" : "Nie",
      needs_migration: formData.needsMigration ? "Tak" : "Nie",
      needs_pbn_migration: formData.needsPbnMigration ? "Tak" : "Nie",
      has_institutional_login: formData.hasInstitutionalLogin ? "Tak" : "Nie",
      message: `
Nowe zgłoszenie demo BPP:

Dane kontaktowe:
- Imię i nazwisko: ${formData.name}
- Email: ${formData.email}
- Instytucja: ${formData.institution}
- Stanowisko: ${formData.position}
- Telefon: ${formData.phone}
- Typ instytucji: ${formData.institutionType}
- Planowany termin wdrożenia: ${formData.plannedDeploymentDate}

Dodatkowe opcje:
- Posiada obecny system: ${formData.hasCurrentSystem ? "Tak" : "Nie"}
- Potrzebuje migracji: ${formData.needsMigration ? "Tak" : "Nie"}
- Potrzebuje migracji z PBN: ${formData.needsPbnMigration ? "Tak" : "Nie"}
- Logowanie instytucjonalne: ${formData.hasInstitutionalLogin ? "Tak" : "Nie"}

Dodatkowe informacje:
${formData.description}
      `,
    }

    console.log("[v0] Sending email with params:", { ...templateParams, message: "[truncated]" })

    const response = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
    })

    console.log("[v0] EmailJS response:", response)
    return { success: true }
  } catch (error) {
    console.error("[v0] EmailJS Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      error: error,
    })
    return { success: false, error: `Błąd EmailJS: ${error instanceof Error ? error.message : "Nieznany błąd"}` }
  }
}
