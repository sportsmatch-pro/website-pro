// React test stub for Footer — used only for unit tests.
// The production component is Footer.astro.

type Props = {
  lang?: 'es' | 'ca' | 'en'
}

const translations: Record<string, Record<string, string>> = {
  es: {
    'foot.product': 'Producto',
    'foot.company': 'Empresa',
    'foot.community': 'Comunidad',
    'foot.legal': 'Legal',
    'foot.tagline': 'Conectamos clubes y entidades deportivas con jugadores y profesionales del sector. Sin intermediarios.',
    'foot.privacy': 'Privacidad',
    'foot.terms': 'Términos',
    'foot.cookies': 'Cookies',
    'foot.gdpr': 'GDPR',
    'foot.copy': '© 2026 SportsMatch · Made in Barcelona',
    'foot.product.clubs': 'Para clubes',
    'foot.product.players': 'Para jugadores',
    'foot.product.pros': 'Profesionales',
    'foot.product.sports': 'Deportes',
    'foot.product.pricing': 'Precios',
    'foot.company.about': 'Nosotros',
    'foot.company.blog': 'Blog',
    'foot.company.press': 'Prensa',
    'foot.company.contact': 'Contacto',
    'foot.community.instagram': 'Instagram',
    'foot.community.tiktok': 'TikTok',
    'foot.community.linkedin': 'LinkedIn',
    'foot.community.twitter': 'Twitter / X',
    'store.available': 'Disponible en',
    'store.appstore': 'App Store',
    'store.googleplay': 'Google Play',
  }
}

export function Footer({ lang = 'es' }: Props) {
  const t = translations[lang] ?? translations.es

  return (
    <footer data-testid="main-footer">
      <div>
        {/* Brand column */}
        <div data-column="brand">
          <a href="/" aria-label="SportsMatch">SportsMatch</a>
          <p>{t['foot.tagline']}</p>
          <a href="#" aria-label="App Store">
            <span>{t['store.available']}</span>
            <span>{t['store.appstore']}</span>
          </a>
          <a href="#" aria-label="Google Play">
            <span>{t['store.available']}</span>
            <span>{t['store.googleplay']}</span>
          </a>
        </div>

        {/* Producto column */}
        <div data-column="product">
          <p>{t['foot.product']}</p>
          <ul>
            <li><a href="#">{t['foot.product.clubs']}</a></li>
            <li><a href="#">{t['foot.product.players']}</a></li>
            <li><a href="#">{t['foot.product.pros']}</a></li>
            <li><a href="#">{t['foot.product.sports']}</a></li>
            <li><a href="#">{t['foot.product.pricing']}</a></li>
          </ul>
        </div>

        {/* Empresa column */}
        <div data-column="company">
          <p>{t['foot.company']}</p>
          <ul>
            <li><a href="#">{t['foot.company.about']}</a></li>
            <li><a href="#">{t['foot.company.blog']}</a></li>
            <li><a href="#">{t['foot.company.press']}</a></li>
            <li><a href="#">{t['foot.company.contact']}</a></li>
          </ul>
        </div>

        {/* Comunidad column */}
        <div data-column="community">
          <p>{t['foot.community']}</p>
          <ul>
            <li><a href="#">{t['foot.community.instagram']}</a></li>
            <li><a href="#">{t['foot.community.tiktok']}</a></li>
            <li><a href="#">{t['foot.community.linkedin']}</a></li>
            <li><a href="#">{t['foot.community.twitter']}</a></li>
          </ul>
        </div>

        {/* Legal column */}
        <div data-column="legal">
          <p>{t['foot.legal']}</p>
          <ul>
            <li><a href="#">{t['foot.privacy']}</a></li>
            <li><a href="#">{t['foot.terms']}</a></li>
            <li><a href="#">{t['foot.cookies']}</a></li>
            <li><a href="#">{t['foot.gdpr']}</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div data-bottom>
        <span>{t['foot.copy']}</span>
        <div>
          <a href="mailto:info@sportsmatch.pro">info@sportsmatch.pro</a>
          <a href="tel:+34623757950">+34 623 75 79 50</a>
        </div>
      </div>
    </footer>
  )
}
