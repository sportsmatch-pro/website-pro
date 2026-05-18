// React version of Header — used only for unit tests.
// The production component is Header.astro.
type Props = {
  currentLang?: string
}

export function Header({ currentLang = 'es-ES' }: Props) {
  return (
    <header data-testid="main-header">
      <nav aria-label="main navigation">
        <a href="/">SPORTSMATCH</a>
      </nav>
    </header>
  )
}
