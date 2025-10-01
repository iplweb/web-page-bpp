import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/images/logo-bpp.png"
              alt="Bibliografia Publikacji Pracowników"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              System informatyczny do katalogowania publikacji pracowników jednostek naukowych.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">System</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/o-systemie" className="text-muted-foreground hover:text-foreground">
                  O systemie
                </Link>
              </li>
              <li>
                <Link href="/mozliwosci" className="text-muted-foreground hover:text-foreground">
                  Możliwości
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground">
                  Wersja demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Zasoby</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/zrodla" className="text-muted-foreground hover:text-foreground">
                  Kod źródłowy
                </Link>
              </li>
              <li>
                <Link href="/zrodla" className="text-muted-foreground hover:text-foreground">
                  Dokumentacja
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-foreground">
                  Wsparcie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link href="https://www.iplweb.pl/" target="_blank" rel="noopener noreferrer">
              <h3 className="font-semibold mb-4 hover:text-amber-600 transition-colors">Wsparcie komercyjne</h3>
            </Link>
            <div className="space-y-4">
              <Link href="https://www.iplweb.pl/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/logo-iplweb.png"
                  alt="IPLWeb - oddychamy internetem"
                  width={150}
                  height={30}
                  className="h-8 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-xs text-muted-foreground">Profesjonalne wsparcie i rozwój oprogramowania</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2004-2025 Bibliografia Publikacji Pracowników. Oprogramowanie na licencji MIT.</p>
        </div>
      </div>
    </footer>
  )
}
