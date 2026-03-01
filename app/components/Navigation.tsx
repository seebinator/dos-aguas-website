'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavProps {
  lang: 'de' | 'es'
  currentPage?: string
}

export default function Navigation({ lang, currentPage }: NavProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  const content = lang === 'de' ? {
    logo: { name: 'Dos Aguas', tagline: 'Consulting' },
    nav: [
      { label: 'Services', href: '/de/services/' },
      { label: 'Team', href: '/de/team/' },
      { label: 'Blog', href: '/de/blog/' },
      { label: 'Docs', href: '/de/docs/' },
      { label: 'Kontakt', href: '/de/kontakt/' },
    ],
    langSwitch: { label: '🇪🇸 ES', href: '/es/' + (currentPage || '') },
    menuLabel: 'Menu'
  } : {
    logo: { name: 'Dos Aguas', tagline: 'Consulting' },
    nav: [
      { label: 'Servicios', href: '/es/services/' },
      { label: 'Equipo', href: '/es/team/' },
      { label: 'Blog', href: '/es/blog/' },
      { label: 'Docs', href: '/es/docs/' },
      { label: 'Contacto', href: '/es/kontakt/' },
    ],
    langSwitch: { label: '🇩🇪 DE', href: '/de/' + (currentPage || '') },
    menuLabel: 'Menu'
  }
  
  return (
    <nav className="nav">
      <div className="nav-content">
        <Link href={lang === 'de' ? '/de/' : '/es/'} className="nav-logo">
          <span className="nav-logo-icon">∞</span>
          <span className="nav-logo-text">
            <span className="nav-logo-name">{content.logo.name}</span>
            <span className="nav-logo-tagline">{content.logo.tagline}</span>
          </span>
        </Link>
        
        <ul className="nav-links">
          {content.nav.map((item) => (
            <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
          ))}
        </ul>
        
        <div className="nav-actions">
          <Link href={content.langSwitch.href} className="lang-btn">{content.langSwitch.label}</Link>
          
          <div className="dropdown" style={{ position: 'relative' }}>
            <button 
              className="btn-nav" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {content.menuLabel} ▼
            </button>
            {dropdownOpen && (
              <div 
                className="dropdown-menu" 
                style={{
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
                }}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {content.nav.map((item) => (
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
        </div>
      </div>
    </nav>
  )
}
