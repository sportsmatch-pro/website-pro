// React test stub for Header — used only for unit tests.
// The production component is Header.astro.

type Props = {
  lang?: 'es' | 'ca' | 'en'
  currentPath?: string
}

const translations: Record<string, Record<string, string>> = {
  es: {
    'nav.product': 'Producto',
    'nav.product.clubs': 'Para Clubes',
    'nav.product.clubs.d': 'Scouting, ofertas, contacto directo.',
    'nav.product.players': 'Para Jugadores',
    'nav.product.players.d': 'Crea tu perfil y encuentra club.',
    'nav.product.pros': 'Para Profesionales',
    'nav.product.pros.d': 'Entrenadores, fisios, analistas.',
    'nav.product.sports': 'Deportes',
    'nav.product.sports.d': 'Fútbol, basket, hockey, voley...',
    'nav.blog': 'Blog',
    'nav.about': 'Nosotros',
    'cta.signin': 'Iniciar sesión',
    'cta.download': 'Descargar app',
    'lang.es': 'Español',
    'lang.ca': 'Català',
    'lang.en': 'English',
  }
}

export function Header({ lang = 'es', currentPath = '/' }: Props) {
  const t = translations[lang] ?? translations.es

  return (
    <header data-testid="main-header">
      <nav aria-label="Principal">
        {/* Producto dropdown with 4 items */}
        <div data-dropdown>
          <button type="button" aria-expanded="false" aria-haspopup="true">
            {t['nav.product']}
          </button>
          <div role="menu">
            <a role="menuitem" href="#">
              <p>{t['nav.product.clubs']}</p>
              <p>{t['nav.product.clubs.d']}</p>
            </a>
            <a role="menuitem" href="#">
              <p>{t['nav.product.players']}</p>
              <p>{t['nav.product.players.d']}</p>
            </a>
            <a role="menuitem" href="#">
              <p>{t['nav.product.pros']}</p>
              <p>{t['nav.product.pros.d']}</p>
            </a>
            <a role="menuitem" href="#">
              <p>{t['nav.product.sports']}</p>
              <p>{t['nav.product.sports.d']}</p>
            </a>
          </div>
        </div>
        <a href="/blog/">{t['nav.blog']}</a>
        <a href="/nosotros">{t['nav.about']}</a>
      </nav>

      {/* Language selector with trigger button and 3 options */}
      <div data-lang-dropdown>
        <button
          type="button"
          data-lang-trigger
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-label="Language selector"
        >
          <span>{lang.toUpperCase()}</span>
        </button>
        <div role="listbox" aria-label="Language selector">
          <a role="option" href="/" aria-current={lang === 'es' ? 'true' : 'false'}>
            <span>ES</span><span>{t['lang.es']}</span>
          </a>
          <a role="option" href="/ca" aria-current={lang === 'ca' ? 'true' : 'false'}>
            <span>CA</span><span>{t['lang.ca']}</span>
          </a>
          <a role="option" href="/en" aria-current={lang === 'en' ? 'true' : 'false'}>
            <span>EN</span><span>{t['lang.en']}</span>
          </a>
        </div>
      </div>

      {/* Action buttons */}
      <a href="https://app.sportsmatch.pro" className="btn btn--ghost">{t['cta.signin']}</a>
      <a href="https://share.sportsmatch.pro" className="btn btn--primary">
        {t['cta.download']}
      </a>
    </header>
  )
}
