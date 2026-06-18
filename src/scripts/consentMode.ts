// Single source of truth for the cookie-category → Google Consent Mode v2
// signal mapping and the payload builders used by the CMP callbacks.
// Pure (no DOM access) so they unit-test cleanly and the future GTM phase can
// reuse them unchanged (R27).

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing'

export type ConsentSignal =
  | 'analytics_storage'
  | 'ad_storage'
  | 'ad_user_data'
  | 'ad_personalization'

export type ConsentValue = 'granted' | 'denied'

// Category → Consent Mode signal(s). `necessary` maps to no signal (R14, R27).
export const CATEGORY_SIGNALS: Record<
  Exclude<ConsentCategory, 'necessary'>,
  ConsentSignal[]
> = {
  analytics: ['analytics_storage'],
  marketing: ['ad_storage', 'ad_user_data', 'ad_personalization'],
}

export const ALL_SIGNALS: ConsentSignal[] = [
  'analytics_storage',
  'ad_storage',
  'ad_user_data',
  'ad_personalization',
]

// Default-denied payload for gtag('consent','default', ...) (R4, R5).
export function defaultConsentState(): Record<ConsentSignal, ConsentValue> {
  return {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  }
}

// Build gtag('consent','update', ...) payload from accepted categories
// (R12, R13, R14). Every signal is explicitly set to 'granted' or 'denied'.
export function buildConsentUpdate(
  acceptedCategories: ConsentCategory[]
): Record<ConsentSignal, ConsentValue> {
  const update: Record<ConsentSignal, ConsentValue> = {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  }

  for (const category of acceptedCategories) {
    if (category === 'necessary') continue
    const signals = CATEGORY_SIGNALS[category]
    if (!signals) continue
    for (const signal of signals) {
      update[signal] = 'granted'
    }
  }

  return update
}

// Build the dataLayer event pushed on every consent decision so non-Google
// tags can be gated by GTM (R15).
export function buildConsentEvent(acceptedCategories: ConsentCategory[]): {
  event: 'cookie_consent_update'
  categories: ConsentCategory[]
} {
  return {
    event: 'cookie_consent_update',
    categories: acceptedCategories,
  }
}
