// @vitest-environment node
// T9 — Static-render tests for CookieConsent.astro and the Footer reopen control
// using Astro's experimental Container API (R4, R6, R7, R8, R10, R11, R18).
// Runs in the node environment: the Container API renders via esbuild, which
// requires a real TextEncoder (jsdom's breaks esbuild's invariant check).

import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import CookieConsent from '../../src/components/CookieConsent.astro'
import Footer from '../../src/components/Footer.astro'

async function renderCookieConsent(lang: 'es' | 'ca' | 'en'): Promise<string> {
  const container = await AstroContainer.create()
  return container.renderToString(CookieConsent, { props: { lang } })
}

async function renderFooter(lang: 'es' | 'ca' | 'en'): Promise<string> {
  const container = await AstroContainer.create()
  return container.renderToString(Footer, { props: { lang } })
}

// ── R5, R16 (PHASE 2) — Consent Mode default-denied moved to <head> partial ────
// The default-denied bootstrap was extracted from CookieConsent.astro into
// ConsentModeDefaults.astro (rendered in <head> before gtm.js). CookieConsent
// must NO LONGER emit it; the default-denied assertions now live in
// tests/components/consentModeDefaults.test.ts (T12). CookieConsent still emits
// the locale config block and the CMP module script.

it('T9a — CookieConsent no longer emits the Consent Mode default-denied script', async () => {
  const html = await renderCookieConsent('es')
  expect(html).not.toContain("gtag('consent', 'default'")
})

it('T9b — CookieConsent still emits the CMP locale config block', async () => {
  const html = await renderCookieConsent('es')
  expect(html).toContain('cookie-consent-config')
})

// ── R7 — three categories present in the serialized config ────────────────────

it('T9c — serialized config contains the three category identifiers', async () => {
  const html = await renderCookieConsent('es')
  expect(html).toContain('"necessary"')
  expect(html).toContain('"analytics"')
  expect(html).toContain('"marketing"')
})

// ── R8, R9, R10 — category descriptions and button labels present ─────────────

it('T9d — serialized config contains accept/reject/preferences button labels (es)', async () => {
  const html = await renderCookieConsent('es')
  expect(html).toContain('Aceptar todo')
  expect(html).toContain('Rechazar todo')
  expect(html).toContain('Preferencias')
})

it('T9e — serialized config contains a category description (es)', async () => {
  const html = await renderCookieConsent('es')
  expect(html).toContain('Imprescindibles para el funcionamiento')
})

// ── R22, R23 — locale selection ───────────────────────────────────────────────

it('T9f — config uses the page locale (ca) and Catalan texts', async () => {
  const html = await renderCookieConsent('ca')
  expect(html).toContain('"lang":"ca"')
  expect(html).toContain('Utilitzem cookies')
})

it('T9g — config uses the page locale (en) and English texts', async () => {
  const html = await renderCookieConsent('en')
  expect(html).toContain('"lang":"en"')
  expect(html).toContain('We use cookies')
})

// ── R24 — cookie policy link per locale ───────────────────────────────────────

it('T9h — config contains locale-correct cookie policy href', async () => {
  expect(await renderCookieConsent('es')).toContain('/cookies')
  expect(await renderCookieConsent('ca')).toContain('/ca/cookies')
  expect(await renderCookieConsent('en')).toContain('/en/cookies')
})

// ── R18 — Footer reopen control ───────────────────────────────────────────────

it('T9i — Footer renders the cookie preferences reopen control', async () => {
  const html = await renderFooter('es')
  expect(html).toContain('data-testid="cookie-preferences-reopen"')
  expect(html).toContain('data-cc="show-preferencesModal"')
  expect(html).toContain('Gestionar cookies')
})
