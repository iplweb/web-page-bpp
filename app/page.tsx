import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "System zarządzania publikacjami naukowymi dla uczelni",
  description:
    "Bibliografia Publikacji Pracowników - profesjonalny system do katalogowania publikacji naukowych. Integracja z PBN, automatyczna punktacja, raporty ewaluacyjne. Oprogramowanie open source MIT.",
  keywords: ["bibliografia publikacji", "system bibliograficzny", "publikacje naukowe", "PBN", "ewaluacja", "uczelnia"],
  openGraph: {
    title: "Bibliografia Publikacji Pracowników - System zarządzania publikacjami",
    description: "Profesjonalny system do katalogowania publikacji naukowych z integracją PBN",
    url: "https://bpp.iplweb.pl",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
