// T10 — Unit tests for the GTM helpers (R4, R13).

import { afterEach, beforeEach, vi } from 'vitest'
import { buildNoscriptIframe, getGtmId } from '../../src/components/gtm'

afterEach(() => {
  vi.unstubAllEnvs()
})

// ── R2/R4 — getGtmId ──────────────────────────────────────────────────────────

it('T10a — getGtmId returns the id when PUBLIC_GTM_ID is set', () => {
  vi.stubEnv('PUBLIC_GTM_ID', 'GTM-TEST123')
  expect(getGtmId()).toBe('GTM-TEST123')
})

it('T10b — getGtmId trims surrounding whitespace', () => {
  vi.stubEnv('PUBLIC_GTM_ID', '  GTM-TEST123  ')
  expect(getGtmId()).toBe('GTM-TEST123')
})

it('T10c — getGtmId returns undefined when PUBLIC_GTM_ID is unset', () => {
  vi.stubEnv('PUBLIC_GTM_ID', undefined as unknown as string)
  expect(getGtmId()).toBeUndefined()
})

it('T10d — getGtmId returns undefined when PUBLIC_GTM_ID is blank', () => {
  vi.stubEnv('PUBLIC_GTM_ID', '   ')
  expect(getGtmId()).toBeUndefined()
})

// ── R3/R13 — buildNoscriptIframe ──────────────────────────────────────────────

it('T10e — buildNoscriptIframe produces the GTM iframe markup for an id', () => {
  const html = buildNoscriptIframe('GTM-TEST123')
  expect(html).toContain(
    'src="https://www.googletagmanager.com/ns.html?id=GTM-TEST123"'
  )
  expect(html).toContain('<iframe')
  expect(html).toContain('height="0"')
  expect(html).toContain('width="0"')
  expect(html).toContain('display:none;visibility:hidden')
})
