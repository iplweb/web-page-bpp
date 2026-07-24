"use client"

import { useCallback, useState } from "react"
import { Copy, Check } from "lucide-react"

export function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [children])

  return (
    <div className="bg-muted rounded-lg p-4 relative group overflow-x-auto">
      <code className="text-sm block pr-10 whitespace-pre">{children}</code>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-background/80 border border-border opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
        title="Kopiuj do schowka"
        aria-label="Kopiuj do schowka"
      >
        {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
      </button>
    </div>
  )
}
