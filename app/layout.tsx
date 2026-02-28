import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dos Aguas Consulting',
  description: 'Deutsch-mexikanische Beratungsgesellschaft für Steuern, IT-Recht, Odoo und digitale Transformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
