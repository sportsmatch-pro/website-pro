// GTM helpers. Pure: getGtmId only reads import.meta.env;
// buildNoscriptIframe is a string builder with no DOM access. Both unit-test
// cleanly. (R2, R3, R4, R13)

// Returns the configured GTM container id, or undefined when not set / blank.
// Reads import.meta.env.PUBLIC_GTM_ID. (R2, R4)
export function getGtmId(): string | undefined {
  const id = import.meta.env.PUBLIC_GTM_ID
  if (typeof id !== 'string') return undefined
  const trimmed = id.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

// Builds the <noscript> GTM iframe HTML for a given id. (R3, R13)
export function buildNoscriptIframe(gtmId: string): string {
  return (
    `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" ` +
    'height="0" width="0" style="display:none;visibility:hidden"></iframe>'
  )
}
