// @vitest-environment node
// T12 — Static-render tests for ConsentModeDefaults.astro via Astro's
// experimental Container API. (R5, R7, R8)

import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import ConsentModeDefaults from '../../src/components/ConsentModeDefaults.astro'

async function render(): Promise<string> {
  const container = await AstroContainer.create()
  return container.renderToString(ConsentModeDefaults)
}

// ── R5, R7 — gtag consent default with all four signals denied ────────────────

it('T12a — emits gtag consent default with all four signals denied', async () => {
  const html = await render()
  expect(html).toContain("gtag('consent', 'default'")
  expect(html).toContain("analytics_storage: 'denied'")
  expect(html).toContain("ad_storage: 'denied'")
  expect(html).toContain("ad_user_data: 'denied'")
  expect(html).toContain("ad_personalization: 'denied'")
})

// ── R8 — dataLayer / gtag bootstrap precedes the default call ──────────────────

it('T12b — bootstraps window.dataLayer and gtag before the default call', async () => {
  const html = await render()
  expect(html).toContain('window.dataLayer = window.dataLayer || []')
  expect(html).toContain('window.gtag = window.gtag || gtag')
  const bootstrapIdx = html.indexOf('window.dataLayer = window.dataLayer')
  const defaultIdx = html.indexOf("gtag('consent', 'default'")
  expect(bootstrapIdx).toBeGreaterThanOrEqual(0)
  expect(defaultIdx).toBeGreaterThan(bootstrapIdx)
})
