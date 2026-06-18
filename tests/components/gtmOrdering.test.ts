// @vitest-environment node
// T13 (ordering) — R6: with PUBLIC_GTM_ID set, the Consent Mode default-denied
// script must appear before the gtm.js loader in the rendered HTML of
// BaseLayout. Asserted on rendered output (Container API), not on source.
// (R5, R6)

import { afterEach, vi } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import BaseLayout from '../../src/layouts/BaseLayout.astro'

afterEach(() => {
  vi.unstubAllEnvs()
})

it('T13b — default-denied script precedes gtm.js loader in BaseLayout (R6)', async () => {
  vi.stubEnv('PUBLIC_GTM_ID', 'GTM-TEST123')
  const container = await AstroContainer.create()
  const html = await container.renderToString(BaseLayout, {
    props: { title: 'Test', lang: 'es' },
    request: new Request('https://sportsmatch.pro/'),
  })

  const defaultIdx = html.indexOf("gtag('consent', 'default'")
  const gtmIdx = html.indexOf('www.googletagmanager.com/gtm.js')

  expect(defaultIdx).toBeGreaterThanOrEqual(0)
  expect(gtmIdx).toBeGreaterThan(0)
  // R6: consent defaults recorded before GTM loads any tag.
  expect(defaultIdx).toBeLessThan(gtmIdx)
})

it('T13c — GtmNoscript is the first child of <body> in BaseLayout (R3)', async () => {
  vi.stubEnv('PUBLIC_GTM_ID', 'GTM-TEST123')
  const container = await AstroContainer.create()
  const html = await container.renderToString(BaseLayout, {
    props: { title: 'Test', lang: 'es' },
    request: new Request('https://sportsmatch.pro/'),
  })

  const noscriptIdx = html.indexOf(
    'https://www.googletagmanager.com/ns.html?id=GTM-TEST123'
  )
  const headerIdx = html.indexOf('data-testid="main-header"')
  expect(noscriptIdx).toBeGreaterThan(0)
  expect(headerIdx).toBeGreaterThan(0)
  expect(noscriptIdx).toBeLessThan(headerIdx)
})
