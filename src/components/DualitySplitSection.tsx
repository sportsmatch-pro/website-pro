// React test stub for DualitySplitSection — used only for unit tests.
// The production component is DualitySplitSection.astro.

type Props = {
  t: Record<string, string>
}

export function DualitySplitSection({ t }: Props) {
  return (
    <section className="duality-split">
      <div className="duality-split__lead">
        <span className="eyebrow">{t['duality.eyebrow']}</span>
        <h2 className="duality-split__heading">{t['duality.title']}</h2>
      </div>

      <div className="duality-split__stage">
        <img
          className="duality-split__bg-img"
          src="/assets/duality-club.jpg"
          alt=""
          loading="lazy"
          aria-hidden="true"
        />

        <div className="duality-split__panels">
          {/* Left panel: clubs/scouts */}
          <a
            className="duality-split__side duality-split__side--club"
            href="#"
            aria-label="Soy club o scouter"
          >
            <div className="duality-split__copy">
              <span className="duality-split__kicker">{t['duality.club.tag']}</span>
              <h3
                className="duality-split__title"
                dangerouslySetInnerHTML={{ __html: t['duality.club.title'] ?? '' }}
              />
              <p className="duality-split__lede">{t['duality.club.desc']}</p>
              <ul className="duality-split__bullets">
                <li>{t['duality.club.b1']}</li>
                <li>{t['duality.club.b2']}</li>
                <li>{t['duality.club.b3']}</li>
              </ul>
              <span className="duality-split__cta">
                <span>{t['duality.club.cta']}</span>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="duality-split__cta-icon">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </a>

          {/* Central divider */}
          <span className="duality-split__divider" aria-hidden="true"></span>

          {/* Right panel: players/pros */}
          <a
            className="duality-split__side duality-split__side--player"
            href="#"
            aria-label="Soy jugador o profesional"
          >
            <div className="duality-split__copy">
              <span className="duality-split__kicker">{t['duality.player.tag']}</span>
              <h3
                className="duality-split__title"
                dangerouslySetInnerHTML={{ __html: t['duality.player.title'] ?? '' }}
              />
              <p className="duality-split__lede">{t['duality.player.desc']}</p>
              <ul className="duality-split__bullets">
                <li>{t['duality.player.b1']}</li>
                <li>{t['duality.player.b2']}</li>
                <li>{t['duality.player.b3']}</li>
              </ul>
              <span className="duality-split__cta">
                <span>{t['duality.player.cta']}</span>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="duality-split__cta-icon">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
