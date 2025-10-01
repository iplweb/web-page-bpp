import type { Metadata } from "next"
import { DemoClientPage } from "./demo-client"

export const metadata: Metadata = {
  title: "Demo systemu BPP - Wypróbuj bezpłatnie",
  description:
    "Przetestuj system Bibliografia Publikacji Pracowników w wersji demonstracyjnej. Zamów dedykowany serwis demo dla swojej uczelni. Bezpłatne konsultacje.",
  keywords: ["demo BPP", "wersja demonstracyjna", "test systemu", "serwis demo", "wdrożenie BPP"],
  openGraph: {
    title: "Demo systemu BPP - Wypróbuj bezpłatnie",
    description: "Przetestuj system Bibliografia Publikacji Pracowników w wersji demonstracyjnej",
    url: "https://bpp.iplweb.pl/demo",
  },
}

export default function DemoPage() {
  return <DemoClientPage />
}
