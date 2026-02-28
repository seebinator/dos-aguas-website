import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dos Aguas Consulting | Ihre Brücke Deutschland–Mexiko',
  description: 'Steuerberatung, IT-Recht, Odoo und digitale Transformation. Ihr Partner für grenzüberschreitendes Geschäft zwischen Deutschland und Mexiko.',
  keywords: ['Steuerberatung', 'IT-Recht', 'Odoo', 'Deutschland', 'Mexiko', 'Digitale Transformation'],
  authors: [{ name: 'Dos Aguas Consulting' }],
  openGraph: {
    title: 'Dos Aguas Consulting',
    description: 'Ihre Brücke zwischen Deutschland und Mexiko',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
