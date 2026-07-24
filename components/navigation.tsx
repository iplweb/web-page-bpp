"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

type NavItem = {
  name: string
  href: string
  description: string
  badge?: string
}

type NavEntry = { name: string; href: string } | { name: string; items: NavItem[] }

const navigation: NavEntry[] = [
  { name: "Witamy", href: "/" },
  {
    name: "System",
    items: [
      { name: "O systemie", href: "/o-systemie", description: "Czym jest BPP i dla kogo powstał" },
      { name: "Możliwości", href: "/mozliwosci", description: "Funkcje, integracje i interfejs" },
      { name: "Wdrożenia", href: "/wdrozenia", description: "Uczelnie i instytuty korzystające z systemu" },
    ],
  },
  {
    name: "Nowości",
    items: [
      { name: "BPP-CRIS", href: "/bpp-cris", description: "Ewolucja w system informacji o nauce", badge: "nowe" },
      { name: "AI w BPP", href: "/bpp-ai", description: "Serwer MCP i asystent sztucznej inteligencji", badge: "nowe" },
    ],
  },
  {
    name: "Wsparcie",
    items: [
      { name: "Kontakt", href: "/kontakt", description: "Napisz do nas w sprawie wdrożenia" },
      { name: "Wsparcie techniczne", href: "/wsparcie", description: "Pomoc, utrzymanie i rozwój instalacji" },
    ],
  },
  { name: "Pobierz", href: "/zrodla" },
  { name: "Demo", href: "/demo" },
]

const isGroup = (entry: NavEntry): entry is { name: string; items: NavItem[] } => "items" in entry

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-[100px] backdrop-saturate-200">
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

          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((entry) => {
                  if (!isGroup(entry)) {
                    return (
                      <NavigationMenuItem key={entry.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={entry.href}
                            className={cn(
                              navigationMenuTriggerStyle,
                              pathname === entry.href && "bg-primary text-primary-foreground hover:bg-primary/90",
                            )}
                          >
                            {entry.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  }

                  const isActiveGroup = entry.items.some((item) => item.href === pathname)

                  return (
                    <NavigationMenuItem key={entry.name}>
                      <NavigationMenuTrigger
                        className={cn(isActiveGroup && "bg-primary text-primary-foreground hover:bg-primary/90")}
                      >
                        {entry.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[320px] p-2">
                          {entry.items.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "group/item block rounded-md p-3 transition-colors focus:outline-none",
                                    "hover:bg-accent hover:text-accent-foreground",
                                    "focus-visible:bg-accent focus-visible:text-accent-foreground",
                                    pathname === item.href && "bg-accent/10",
                                  )}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium leading-none">{item.name}</span>
                                    {item.badge && (
                                      <Badge
                                        variant="secondary"
                                        className={cn(
                                          "px-1.5 py-0 text-[10px] font-medium uppercase tracking-wide transition-colors",
                                          "group-hover/item:bg-accent-foreground/20 group-hover/item:text-accent-foreground",
                                          "group-focus-visible/item:bg-accent-foreground/20 group-focus-visible/item:text-accent-foreground",
                                        )}
                                      >
                                        {item.badge}
                                      </Badge>
                                    )}
                                  </div>
                                  <p
                                    className={cn(
                                      "mt-1.5 text-xs leading-snug text-muted-foreground transition-colors",
                                      "group-hover/item:text-accent-foreground/85",
                                      "group-focus-visible/item:text-accent-foreground/85",
                                    )}
                                  >
                                    {item.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/90 backdrop-blur-[100px] backdrop-saturate-200">
            <nav className="flex flex-col gap-1 p-4">
              {navigation.map((entry) => {
                if (!isGroup(entry)) {
                  return (
                    <Link key={entry.href} href={entry.href} onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant={pathname === entry.href ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm font-medium"
                      >
                        {entry.name}
                      </Button>
                    </Link>
                  )
                }

                return (
                  <div key={entry.name} className="mt-2 first:mt-0">
                    <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {entry.name}
                    </p>
                    {entry.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                        <Button
                          variant={pathname === item.href ? "default" : "ghost"}
                          size="sm"
                          className="w-full justify-start text-sm font-medium"
                        >
                          {item.name}
                          {item.badge && (
                            <Badge variant="secondary" className="ml-2 px-1.5 py-0 text-[10px] uppercase">
                              {item.badge}
                            </Badge>
                          )}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
