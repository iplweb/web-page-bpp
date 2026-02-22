"use server"

import emailjs from "@emailjs/nodejs"

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength)
}

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
    // Walidacja wymaganych pól
    if (!formData.name || !formData.email || !formData.institution) {
      return { success: false, error: "Wypełnij wymagane pola: imię, email i instytucja." }
    }

    if (!validateEmail(formData.email)) {
      return { success: false, error: "Podaj poprawny adres email." }
    }

    if (formData.name.length > 200 || formData.email.length > 254 || formData.institution.length > 300) {
      return { success: false, error: "Przekroczono maksymalną długość pola." }
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      return { success: false, error: "Brak konfiguracji EmailJS — skontaktuj się z administratorem." }
    }

    const templateParams = {
      from_name: sanitize(formData.name, 200),
      from_email: sanitize(formData.email, 254),
      institution: sanitize(formData.institution, 300),
      position: sanitize(formData.position, 200),
      phone: sanitize(formData.phone, 30),
      institution_type: sanitize(formData.institutionType, 100),
      planned_deployment: sanitize(formData.plannedDeploymentDate, 100),
      description: sanitize(formData.description, 5000),
      has_current_system: formData.hasCurrentSystem ? "Tak" : "Nie",
      needs_migration: formData.needsMigration ? "Tak" : "Nie",
      needs_pbn_migration: formData.needsPbnMigration ? "Tak" : "Nie",
      has_institutional_login: formData.hasInstitutionalLogin ? "Tak" : "Nie",
      message: `
Nowe zgłoszenie demo BPP:

Dane kontaktowe:
- Imię i nazwisko: ${sanitize(formData.name, 200)}
- Email: ${sanitize(formData.email, 254)}
- Instytucja: ${sanitize(formData.institution, 300)}
- Stanowisko: ${sanitize(formData.position, 200)}
- Telefon: ${sanitize(formData.phone, 30)}
- Typ instytucji: ${sanitize(formData.institutionType, 100)}
- Planowany termin wdrożenia: ${sanitize(formData.plannedDeploymentDate, 100)}

Dodatkowe opcje:
- Posiada obecny system: ${formData.hasCurrentSystem ? "Tak" : "Nie"}
- Potrzebuje migracji: ${formData.needsMigration ? "Tak" : "Nie"}
- Potrzebuje migracji z PBN: ${formData.needsPbnMigration ? "Tak" : "Nie"}
- Logowanie instytucjonalne: ${formData.hasInstitutionalLogin ? "Tak" : "Nie"}

Dodatkowe informacje:
${sanitize(formData.description, 5000)}
      `,
    }

    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
    })

    return { success: true }
  } catch (error) {
    return { success: false, error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później." }
  }
}
