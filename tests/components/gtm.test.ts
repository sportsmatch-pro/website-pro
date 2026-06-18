// @vitest-environment node
// T11 — Static-render tests for GtmHead.astro / GtmNoscript.astro via Astro's
// experimental Container API. Runs in node (esbuild needs a real TextEncoder).
// (R2, R3, R4, R12, R13)

import { afterEach, vi } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import GtmHead from '../../src/components/GtmHead.astro'
import GtmNoscript from '../../src/components/GtmNoscript.astro'

afterEach(() => {
  vi.unstubAllEnvs()
})

async function render(component: Parameters<AstroContainer['renderToString']>[0]): Promise<string> {
  const container = await AstroContainer.create()
  return container.renderToString(component)
}

// ── R2, R12 — GtmHead with PUBLIC_GTM_ID set ──────────────────────────────────

it('T11a — GtmHead emits the gtm.js loader containing the id when set', async () => {
  vi.stubEnv('PUBLIC_GTM_ID', 'GTM-TEST123')
  const html = await render(GtmHead)
  expect(html).toContain('www.googletagmanager.com/gtm.js')
  expect(html).toContain('GTM-TEST123')
})

// ── R3, R13 — GtmNoscript with PUBLIC_GTM_ID set ──────────────────────────────

it('T11b — GtmNoscript emits the noscript iframe when set', async () => {
  vi.stubEnv('PUBLIC_GTM_ID', 'GTM-TEST123')
  const html = await render(GtmNoscript)
  expect(html).toContain('<noscript')
  expect(html).toContain(
    'https://www.googletagmanager.com/ns.html?id=GTM-TEST123'
  )
})

// ── R4 — both render nothing when PUBLIC_GTM_ID is unset ───────────────────────

it('T11c — GtmHead renders nothing when PUBLIC_GTM_ID is unset', async () => {
  vi.stubEnv('PUBLIC_GTM_ID', undefined as unknown as string)
  const html = await render(GtmHead)
  expect(html).not.toContain('googletagmanager.com')
  expect(html.trim()).toBe('')
})

it('T11d — GtmNoscript renders nothing when PUBLIC_GTM_ID is unset', async () => {
  vi.stubEnv('PUBLIC_GTM_ID', undefined as unknown as string)
  const html = await render(GtmNoscript)
  expect(html).not.toContain('googletagmanager.com')
  expect(html.trim()).toBe('')
})
