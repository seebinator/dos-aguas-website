'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavDropdownProps {
  lang: 'de' | 'es'
}

export default function NavDropdown({ lang }: NavDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  const menuItems = lang === 'de' ? [
    { label: 'Services', href: '/de/services/' },
    { label: 'Team', href: '/de/team/' },
    { label: 'Blog', href: '/de/blog/' },
    { label: 'Docs', href: '/de/docs/' },
    { label: 'Kontakt', href: '/de/kontakt/' },
  ] : [
    { label: 'Servicios', href: '/es/services/' },
    { label: 'Equipo', href: '/es/team/' },
    { label: 'Blog', href: '/es/blog/' },
    { label: 'Docs', href: '/es/docs/' },
    { label: 'Contacto', href: '/es/kontakt/' },
  ]
  
  return (
    <div className="dropdown" style={{ position: 'relative' }}>
      <button 
        className="btn-nav" 
        onClick={() => setDropdownOpen(!dropdownOpen)}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        Menu ▼
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu" style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          background: 'var(--color-bg-card, #1a1a2e)',
          border: '1px solid var(--color-border, rgba(255,255,255,0.1))',
          borderRadius: '8px',
          padding: '0.5rem 0',
          minWidth: '150px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 100
        }}>
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              style={{
                display: 'block',
                padding: '0.5rem 1rem',
                color: 'var(--color-text, #e0e0e0)',
                textDecoration: 'none',
                fontSize: '0.875rem'
              }} 
              onClick={() => setDropdownOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
