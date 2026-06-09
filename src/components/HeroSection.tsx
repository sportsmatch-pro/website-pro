// React test stub for HeroSection — used only for unit tests.
// The production component is HeroSection.astro.

type Props = {
  t: Record<string, string>
}

export function HeroSection({ t }: Props) {
  return (
    <section className="hero">
      <div className="hero__grid-bg" aria-hidden="true"></div>
      <div className="hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">{t['hero.eyebrow']}</span>
          <h1
            className="hero__title"
            dangerouslySetInnerHTML={{ __html: t['hero.title'] ?? '' }}
          />
          <p className="hero__sub">{t['hero.sub']}</p>

          <div className="hero__ctas">
            <a className="store-btn" href="#" aria-label="App Store">
              <svg className="store-btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.5 12.5c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-2-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1.9-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.6-1-2.6-3.9zm-2.4-7.2c.7-.8 1.1-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1 0 2.3-.5 2.9-1.3z" />
              </svg>
              <span className="store-btn__label">
                <span className="store-btn__hint">{t['store.available']}</span>
                <span className="store-btn__name">{t['store.appstore']}</span>
              </span>
            </a>
            <a className="store-btn" href="#" aria-label="Google Play">
              <svg className="store-btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7l9.3-9.4-9.3-10zM14.7 13.4l-9.3 9.4c.5.3 1.1.3 1.7 0l11-6.3-3.4-3.1zM20.7 11l-2.7-1.5L14.7 12.5l3.4 3.1 2.7-1.5c1.4-.8 1.4-2.7-.1-3.1zM5.4 1.7c-.6-.3-1.2-.3-1.7 0l9.3 10 3.4-3.1L5.4 1.7z" />
              </svg>
              <span className="store-btn__label">
                <span className="store-btn__hint">{t['store.available']}</span>
                <span className="store-btn__name">{t['store.googleplay']}</span>
              </span>
            </a>
            <a className="btn btn--ghost" href="#">{t['hero.cta.secondary']}</a>
          </div>

          <div className="hero__meta">
            <span className="hero__meta-dot" aria-hidden="true"></span>
            <span dangerouslySetInnerHTML={{ __html: t['hero.meta.free'] ?? '' }} />
          </div>
        </div>

        <div className="hero__visual-wrap">
          <div className="hero__visual hero__visual--photo">
            <img
              className="hero__photo"
              src="/assets/hero-home.jpg"
              alt="Jugador y representante de club en contexto deportivo real"
              loading="eager"
            />
          </div>

          <span className="hero__chip hero__chip--left">
            <span className="hero__chip-status" aria-hidden="true"></span>
            <span>{t['hero.chip.player']}</span>
          </span>
          <span className="hero__chip hero__chip--right">
            <span className="hero__chip-avatar">CF</span>
            <span>{t['hero.chip.club']}</span>
          </span>
        </div>
      </div>
    </section>
  )
}
