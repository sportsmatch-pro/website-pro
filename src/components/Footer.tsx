// React version of Footer — used only for unit tests.
// The production component is Footer.astro.
type Props = {
  currentLang?: string
}

export function Footer({ currentLang = 'es-ES' }: Props) {
  return (
    <footer data-testid="main-footer">
      <nav aria-label="footer navigation">
        <a href="/">SPORTSMATCH</a>
      </nav>
    </footer>
  )
}
