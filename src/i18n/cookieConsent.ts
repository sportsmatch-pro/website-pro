import type { Lang } from './index'

export interface CookieConsentTexts {
  banner: { title: string; description: string }
  categories: {
    necessary: { title: string; description: string }
    analytics: { title: string; description: string }
    marketing: { title: string; description: string }
  }
  buttons: {
    acceptAll: string
    rejectAll: string
    preferences: string
    save: string
  }
  preferences: { title: string; close: string }
  policy: { label: string; href: string }
}

const cookiesHref: Record<Lang, string> = {
  es: '/cookies',
  ca: '/ca/cookies',
  en: '/en/cookies',
}

const texts: Record<Lang, CookieConsentTexts> = {
  es: {
    banner: {
      title: 'Usamos cookies',
      description:
        'Utilizamos cookies para asegurar el funcionamiento del sitio y, con tu ' +
        'consentimiento, para analítica y marketing. Puedes aceptar todas, ' +
        'rechazarlas o configurar tus preferencias.',
    },
    categories: {
      necessary: {
        title: 'Cookies necesarias',
        description:
          'Imprescindibles para el funcionamiento básico del sitio. Siempre ' +
          'activas y no se pueden desactivar.',
      },
      analytics: {
        title: 'Cookies de analítica',
        description:
          'Nos permiten medir el uso del sitio de forma agregada para mejorar ' +
          'el contenido y la experiencia.',
      },
      marketing: {
        title: 'Cookies de marketing',
        description:
          'Se utilizan para medir la eficacia de las campañas.',
      },
    },
    buttons: {
      acceptAll: 'Aceptar todo',
      rejectAll: 'Rechazar todo',
      preferences: 'Preferencias',
      save: 'Guardar preferencias',
    },
    preferences: {
      title: 'Preferencias de cookies',
      close: 'Cerrar',
    },
    policy: { label: 'Política de cookies', href: cookiesHref.es },
  },
  ca: {
    banner: {
      title: 'Utilitzem cookies',
      description:
        "Utilitzem cookies per assegurar el funcionament del lloc i, amb el teu " +
        'consentiment, per analítica i màrqueting. Pots acceptar-les totes, ' +
        'rebutjar-les o configurar les teves preferències.',
    },
    categories: {
      necessary: {
        title: 'Cookies necessàries',
        description:
          'Imprescindibles per al funcionament bàsic del lloc. Sempre actives ' +
          'i no es poden desactivar.',
      },
      analytics: {
        title: 'Cookies d\'analítica',
        description:
          "Ens permeten mesurar l'ús del lloc de manera agregada per millorar " +
          "el contingut i l'experiència.",
      },
      marketing: {
        title: 'Cookies de màrqueting',
        description:
          "S'utilitzen per mesurar l'eficàcia de les campanyes.",
      },
    },
    buttons: {
      acceptAll: 'Acceptar-ho tot',
      rejectAll: 'Rebutjar-ho tot',
      preferences: 'Preferències',
      save: 'Desar preferències',
    },
    preferences: {
      title: 'Preferències de cookies',
      close: 'Tancar',
    },
    policy: { label: 'Política de cookies', href: cookiesHref.ca },
  },
  en: {
    banner: {
      title: 'We use cookies',
      description:
        'We use cookies to ensure the site works and, with your consent, for ' +
        'analytics and marketing. You can accept all, reject them or configure ' +
        'your preferences.',
    },
    categories: {
      necessary: {
        title: 'Necessary cookies',
        description:
          'Essential for the basic operation of the site. Always on and cannot ' +
          'be disabled.',
      },
      analytics: {
        title: 'Analytics cookies',
        description:
          'Allow us to measure site usage in aggregate to improve content and ' +
          'experience.',
      },
      marketing: {
        title: 'Marketing cookies',
        description:
          'Used to measure the effectiveness of campaigns.',
      },
    },
    buttons: {
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      preferences: 'Preferences',
      save: 'Save preferences',
    },
    preferences: {
      title: 'Cookie preferences',
      close: 'Close',
    },
    policy: { label: 'Cookie policy', href: cookiesHref.en },
  },
}

// Returns the CMP text block for the given locale, falling back to 'es' for any
// unknown locale (R23), mirroring the getTranslations fallback pattern.
export function getCookieConsentTexts(lang: Lang): CookieConsentTexts {
  return texts[lang] ?? texts.es
}
