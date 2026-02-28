import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dos Aguas Consulting | Panel de Equipo',
  description: 'Asesoría fiscal, derecho IT, Odoo y transformación digital. Su socio para negocios transfronterizos entre Alemania y México.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
