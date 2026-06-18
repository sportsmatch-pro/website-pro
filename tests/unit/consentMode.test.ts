// T8 — Unit tests for the Consent Mode mapping/payload builders (R12, R13, R14,
// R15, R27).

import {
  ALL_SIGNALS,
  buildConsentEvent,
  buildConsentUpdate,
  defaultConsentState,
} from '../../src/scripts/consentMode'

// ── R4/R5 — default-denied state ──────────────────────────────────────────────

it('T8a — defaultConsentState returns all four signals denied', () => {
  const state = defaultConsentState()
  expect(state).toEqual({
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
})

// ── R13 — reject all ──────────────────────────────────────────────────────────

it('T8b — buildConsentUpdate([necessary]) denies all signals', () => {
  const update = buildConsentUpdate(['necessary'])
  for (const signal of ALL_SIGNALS) {
    expect(update[signal]).toBe('denied')
  }
})

it('T8c — buildConsentUpdate([]) denies all signals', () => {
  const update = buildConsentUpdate([])
  for (const signal of ALL_SIGNALS) {
    expect(update[signal]).toBe('denied')
  }
})

// ── R14 — analytics only ──────────────────────────────────────────────────────

it('T8d — buildConsentUpdate([necessary, analytics]) grants only analytics_storage', () => {
  const update = buildConsentUpdate(['necessary', 'analytics'])
  expect(update).toEqual({
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
})

// ── R14 — marketing only ──────────────────────────────────────────────────────

it('T8e — buildConsentUpdate([necessary, marketing]) grants the three ad signals', () => {
  const update = buildConsentUpdate(['necessary', 'marketing'])
  expect(update).toEqual({
    analytics_storage: 'denied',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  })
})

// ── R12 — accept all ──────────────────────────────────────────────────────────

it('T8f — buildConsentUpdate with all categories grants all signals', () => {
  const update = buildConsentUpdate(['necessary', 'analytics', 'marketing'])
  for (const signal of ALL_SIGNALS) {
    expect(update[signal]).toBe('granted')
  }
})

// ── R15 — dataLayer event ─────────────────────────────────────────────────────

it('T8g — buildConsentEvent emits cookie_consent_update with the category list', () => {
  const event = buildConsentEvent(['necessary', 'analytics'])
  expect(event).toEqual({
    event: 'cookie_consent_update',
    categories: ['necessary', 'analytics'],
  })
})
