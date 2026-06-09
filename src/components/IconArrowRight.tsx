// React test stub for IconArrowRight — used only for unit tests.
// The production component is IconArrowRight.astro.

type Props = {
  className?: string
}

export function IconArrowRight({ className = '' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
