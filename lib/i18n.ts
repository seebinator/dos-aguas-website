export const translations = {
  de: {
    nav: {
      services: 'Services',
      team: 'Team',
      blog: 'Blog',
      docs: 'Docs',
      contact: 'Kontakt',
      dropbox: 'Dropbox',
    },
    hero: {
      pretitle: 'Willkommen im internen Portal',
      title: 'Dos Aguas Team Panel',
      cta: 'Team entdecken →',
    },
    stats: {
      agents: 'Agenten',
      languages: 'Sprachen',
      growth: 'Wachstum',
      support: 'Support',
    },
    services: {
      pretitle: 'Unsere Leistungen',
      title: 'Alles für Ihren Erfolg',
      description: 'Von der Steuerberatung bis zur digitalen Transformation – wir begleiten Sie auf jedem Schritt.',
      tax: {
        title: 'Steuerberatung',
        description: 'Kompetente Begleitung in Deutschland und Mexiko. Wir kennen beide Steuersysteme.',
      },
      legal: {
        title: 'IT-Recht & Datenschutz',
        description: 'DSGVO, LFPDPPP und internationale Compliance. Rechtssichere digitale Prozesse.',
      },
      odoo: {
        title: 'Odoo Implementierung',
        description: 'Maßgeschneiderte ERP-Lösungen, die skalieren. Von der Beratung bis zum Go-live.',
      },
      digital: {
        title: 'Digitale Transformation',
        description: 'Prozessoptimierung und Business Intelligence. Wir bringen Ihr Unternehmen in die digitale Zukunft.',
      },
    },
    cta: {
      pretitle: 'Bereit für den nächsten Schritt?',
      title: 'Lassen Sie uns über Ihr Projekt sprechen',
      description: 'Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Gemeinsam gestalten wir Ihre digitale Transformation.',
      button: 'Jetzt kontaktieren →',
    },
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      copyright: '© 2026 Dos Aguas Consulting',
    },
    sideText: 'KI-BERATUNG • TRANSFERPREISE • MEXIKO',
  },
  es: {
    nav: {
      services: 'Servicios',
      team: 'Equipo',
      blog: 'Blog',
      docs: 'Docs',
      contact: 'Contacto',
      dropbox: 'Dropbox',
    },
    hero: {
      pretitle: 'Bienvenido al portal interno',
      title: 'Dos Aguas Panel de Equipo',
      cta: 'Descubrir equipo →',
    },
    stats: {
      agents: 'Agentes',
      languages: 'Idiomas',
      growth: 'Crecimiento',
      support: 'Soporte',
    },
    services: {
      pretitle: 'Nuestros servicios',
      title: 'Todo para su éxito',
      description: 'De la consultoría fiscal a la transformación digital – le acompañamos en cada paso.',
      tax: {
        title: 'Asesoría Fiscal',
        description: 'Acompañamiento competente en Alemania y México. Conocemos ambos sistemas fiscales.',
      },
      legal: {
        title: 'Derecho IT & Protección de Datos',
        description: 'GDPR, LFPDPPP y cumplimiento internacional. Procesos digitales seguros.',
      },
      odoo: {
        title: 'Implementación Odoo',
        description: 'Soluciones ERP a medida que escalan. Desde la consulta hasta el go-live.',
      },
      digital: {
        title: 'Transformación Digital',
        description: 'Optimización de procesos e inteligencia de negocios. Llevamos su empresa al futuro digital.',
      },
    },
    cta: {
      pretitle: '¿Listo para el siguiente paso?',
      title: 'Hablemos de su proyecto',
      description: 'Contáctenos para una consulta inicial sin compromiso. Juntos daremos forma a su transformación digital.',
      button: 'Contactar ahora →',
    },
    footer: {
      imprint: 'Aviso Legal',
      privacy: 'Privacidad',
      copyright: '© 2026 Dos Aguas Consulting',
    },
    sideText: 'CONSULTORÍA IA • PRECIOS DE TRANSFERENCIA • MÉXICO',
  },
} as const

export type Locale = keyof typeof translations
export type Translations = typeof translations
