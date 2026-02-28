'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Locale } from '@/lib/i18n'

interface I18nContextType {
  locale: Locale
  t: typeof translations.en
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('de')
  
  const t = translations[locale]
  
  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
