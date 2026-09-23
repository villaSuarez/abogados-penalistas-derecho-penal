"use client"

import Link from "next/link"

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.75a9.25 9.25 0 0 0-7.98 13.93L2.75 21.25l4.73-1.24A9.25 9.25 0 1 0 12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.27 7.78c.2-.23.42-.24.67-.24h.45c.17 0 .35.06.43.3l.65 1.56c.08.2.05.37-.08.55l-.48.6c-.1.13-.08.28-.02.4.25.48.62.96 1.08 1.37.52.47 1.1.84 1.68 1.08.16.07.3.05.42-.1l.58-.7c.14-.17.3-.2.5-.1l1.5.7c.2.1.3.2.29.4-.03.6-.3 1.2-.75 1.5-.4.27-.93.4-1.5.26-1.12-.27-2.44-.98-3.5-1.93-1.02-.92-1.88-2.1-2.3-3.1-.26-.63-.18-1.2.08-1.65l.3-.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/+573003446228?text=Estoy%20interesado%20en%20alguno%20de%20los%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors hover:scale-110 transform duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  )
}
