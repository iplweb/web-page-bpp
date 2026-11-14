"use client"

import { useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function InstallerScreenshot() {
  const dialog = useRef<HTMLDialogElement>(null)

  return (
    <figure className="mx-auto mt-6 w-4/5">
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label="Powiększ zrzut ekranu instalatora BPP dla Windows"
        className="block w-full cursor-zoom-in overflow-hidden rounded-lg border shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <Image
          src="/images/bpp-windows-installer.webp"
          alt="Gotowa instalacja BPP w Windows — okno instalatora i uruchomiony system w przeglądarce"
          width={1996}
          height={1248}
          sizes="80vw"
          className="h-auto w-full"
        />
      </button>
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">
        BPP po instalacji w Windows. Kliknij, aby powiększyć.
      </figcaption>
      <dialog
        ref={dialog}
        aria-label="Powiększony zrzut ekranu BPP w Windows"
        onClick={() => dialog.current?.close()}
        className="fixed inset-0 m-auto max-h-[95vh] max-w-[95vw] overflow-auto rounded-lg border bg-background p-0 backdrop:bg-black/80"
      >
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label="Zamknij powiększenie"
          className="fixed right-4 top-4 rounded-full bg-background p-2 text-foreground shadow-lg"
        >
          <X className="h-6 w-6" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bpp-windows-installer.webp"
          alt="Gotowa instalacja BPP w Windows"
          className="block max-h-[95vh] max-w-[95vw] cursor-zoom-out object-contain"
        />
      </dialog>
    </figure>
  )
}
