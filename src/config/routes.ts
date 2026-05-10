export interface RouteConfig {
  url: string;
  title: string;
  description: string;
}

export interface PageRoutes {
  [key: string]: RouteConfig;
}

export interface AppRoutes {
  [key: string]: PageRoutes;
}

// Configuració centralitzada de rutes, títols i descripcions
export const routes: AppRoutes = {
  legal: {
    "es-ES": {
      url: "/aviso-legal",
      title: "Aviso Legal",
      description: "Aviso legal de SportsMatch"
    },
    "ca-ES": {
      url: "/ca/avis-legal",
      title: "Avís Legal",
      description: "Avís legal de SportsMatch"
    },
    "en": {
      url: "/en/legal",
      title: "Legal Notice",
      description: "Legal notice of SportsMatch"
    }
  },
  privacy: {
    "es-ES": {
      url: "/politica-de-privacidad",
      title: "Política de Privacidad",
      description: "Política de privacidad de SportsMatch"
    },
    "ca-ES": {
      url: "/ca/politica-de-privacitat",
      title: "Política de Privacitat",
      description: "Política de privacitat de SportsMatch"
    },
    "en": {
      url: "/en/privacy-policy",
      title: "Privacy Policy",
      description: "Privacy policy of SportsMatch"
    }
  },
  cookies: {
    "es-ES": {
      url: "/cookies",
      title: "Política de Cookies",
      description: "Política de cookies de SportsMatch"
    },
    "ca-ES": {
      url: "/ca/cookies",
      title: "Política de Cookies",
      description: "Política de cookies de SportsMatch"
    },
    "en": {
      url: "/en/cookies",
      title: "Cookies Policy",
      description: "Cookies policy of SportsMatch"
    }
  },
  about: {
    "es-ES": {
      url: "/about",
      title: "Sobre Nosotros",
      description: "Sobre nosotros - SportsMatch"
    },
    "ca-ES": {
      url: "/ca/about",
      title: "Sobre Nosaltres",
      description: "Sobre nosaltres - SportsMatch"
    },
    "en": {
      url: "/en/about",
      title: "About Us",
      description: "About us - SportsMatch"
    }
  },
  contact: {
    "es-ES": {
      url: "/contact",
      title: "Contacto",
      description: "Contacto - SportsMatch"
    },
    "ca-ES": {
      url: "/ca/contact",
      title: "Contacte",
      description: "Contacte - SportsMatch"
    },
    "en": {
      url: "/en/contact",
      title: "Contact",
      description: "Contact - SportsMatch"
    }
  },
  club: {
    "es-ES": { url: "/club", title: "Club", description: "Club - SportsMatch" },
    "ca-ES": { url: "/ca/club", title: "Club", description: "Club - SportsMatch" },
    "en": { url: "/en/club", title: "Club", description: "Club - SportsMatch" }
  },
  player: {
    "es-ES": { url: "/jugador", title: "Jugador", description: "Jugador - SportsMatch" },
    "ca-ES": { url: "/ca/jugador", title: "Jugador", description: "Jugador - SportsMatch" },
    "en": { url: "/en/player", title: "Player", description: "Player - SportsMatch" }
  },
  professional: {
    "es-ES": { url: "/profesional", title: "Profesional", description: "Profesional - SportsMatch" },
    "ca-ES": { url: "/ca/professional", title: "Professional", description: "Professional - SportsMatch" },
    "en": { url: "/en/professional", title: "Professional", description: "Professional - SportsMatch" }
  },
  sports: {
    "es-ES": { url: "/deportes", title: "Deportes", description: "Deportes - SportsMatch" },
    "ca-ES": { url: "/ca/esports", title: "Esports", description: "Esports - SportsMatch" },
    "en": { url: "/en/sports", title: "Sports", description: "Sports - SportsMatch" }
  },
  "sports-soccer": {
    "es-ES": { url: "/deportes/futbol", title: "Fútbol", description: "Fútbol - SportsMatch" },
    "ca-ES": { url: "/ca/esports/futbol", title: "Futbol", description: "Futbol - SportsMatch" },
    "en": { url: "/en/sports/soccer", title: "Soccer", description: "Soccer - SportsMatch" }
  },
  "sports-futsal": {
    "es-ES": { url: "/deportes/futsal", title: "Fútbol Sala", description: "Fútbol Sala - SportsMatch" },
    "ca-ES": { url: "/ca/esports/futsal", title: "Futbol Sala", description: "Futbol Sala - SportsMatch" },
    "en": { url: "/en/sports/futsal", title: "Futsal", description: "Futsal - SportsMatch" }
  },
  "sports-basketball": {
    "es-ES": { url: "/deportes/baloncesto", title: "Baloncesto", description: "Baloncesto - SportsMatch" },
    "ca-ES": { url: "/ca/esports/basquet", title: "Bàsquet", description: "Bàsquet - SportsMatch" },
    "en": { url: "/en/sports/basketball", title: "Basketball", description: "Basketball - SportsMatch" }
  },
  "sports-rinkhockey": {
    "es-ES": { url: "/deportes/hockey-patines", title: "Hockey Patines", description: "Hockey Patines - SportsMatch" },
    "ca-ES": { url: "/ca/esports/hoquei-patins", title: "Hoquei Patins", description: "Hoquei Patins - SportsMatch" },
    "en": { url: "/en/sports/rinkhockey", title: "Rink Hockey", description: "Rink Hockey - SportsMatch" }
  },
  "sports-handball": {
    "es-ES": { url: "/deportes/balonmano", title: "Balonmano", description: "Balonmano - SportsMatch" },
    "ca-ES": { url: "/ca/esports/handbol", title: "Handbol", description: "Handbol - SportsMatch" },
    "en": { url: "/en/sports/handball", title: "Handball", description: "Handball - SportsMatch" }
  },
  "sports-volleyball": {
    "es-ES": { url: "/deportes/voleibol", title: "Voleibol", description: "Voleibol - SportsMatch" },
    "ca-ES": { url: "/ca/esports/voleibol", title: "Voleibol", description: "Voleibol - SportsMatch" },
    "en": { url: "/en/sports/volleyball", title: "Volleyball", description: "Volleyball - SportsMatch" }
  },
  prices: {
    "es-ES": { url: "/precios", title: "Precios", description: "Precios - SportsMatch" },
    "ca-ES": { url: "/ca/preus", title: "Preus", description: "Preus - SportsMatch" },
    "en": { url: "/en/prices", title: "Prices", description: "Prices - SportsMatch" }
  },
  support: {
    "es-ES": { url: "/soporte", title: "Soporte", description: "Soporte - SportsMatch" },
    "ca-ES": { url: "/ca/suport", title: "Suport", description: "Suport - SportsMatch" },
    "en": { url: "/en/support", title: "Support", description: "Support - SportsMatch" }
  },
  login: {
    "es-ES": { url: "/acceder", title: "Acceder", description: "Acceder a SportsMatch" },
    "ca-ES": { url: "/ca/accedir", title: "Accedir", description: "Accedir a SportsMatch" },
    "en": { url: "/en/login", title: "Login", description: "Log in to SportsMatch" }
  },
  signin: {
    "es-ES": { url: "/registrarse", title: "Registrarse", description: "Registrarse en SportsMatch" },
    "ca-ES": { url: "/ca/registrar-se", title: "Registrar-se", description: "Registrar-se a SportsMatch" },
    "en": { url: "/en/signin", title: "Sign Up", description: "Sign up for SportsMatch" }
  }
};

// Funció helper per obtenir les rutes d'una pàgina específica
export function getPageRoutes(pageKey: string): PageRoutes | undefined {
  return routes[pageKey];
}

// Funció helper per obtenir la configuració d'una pàgina en un idioma específic
export function getPageConfig(pageKey: string, language: string): RouteConfig | undefined {
  return routes[pageKey]?.[language];
}

// Funció helper per obtenir les rutes de traducció (només URLs) per al LanguageSelector
export function getTranslationRoutes(pageKey: string): { [key: string]: string } {
  const pageRoutes = routes[pageKey];
  if (!pageRoutes) return {};

  const translationRoutes: { [key: string]: string } = {};
  Object.entries(pageRoutes).forEach(([lang, config]) => {
    translationRoutes[lang] = config.url;
  });

  return translationRoutes;
}
