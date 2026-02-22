"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Strona główna", href: "/" },
  { name: "O systemie", href: "/o-systemie" },
  { name: "Możliwości", href: "/mozliwosci" },
  { name: "Wdrożenia", href: "/wdrozenia" },
  { name: "Pobierz", href: "/zrodla" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Demo", href: "/demo" },
  { name: "Wsparcie", href: "/wsparcie" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-3xl backdrop-saturate-150">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 no-animation">
            <Image
              src="/images/logo-bpp.png"
              alt="Bibliografia Publikacji Pracowników"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === item.href && "bg-primary text-primary-foreground",
                  )}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/80 backdrop-blur-3xl backdrop-saturate-150">
            <nav className="flex flex-col space-y-1 p-4">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "w-full justify-start text-sm font-medium transition-colors",
                      pathname === item.href && "bg-primary text-primary-foreground",
                    )}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
