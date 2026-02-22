import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Demo - Bibliografia Publikacji Pracowników",
  description: "Zamów prezentację systemu BPP — wypełnij formularz i umów bezpłatną konsultację wdrożeniową.",
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
