// T15, T16, T17 — HeroSection unit tests
// Tests use the React stub HeroSection.tsx, not the Astro component.

import { render, screen } from '@testing-library/react'
import { createElement } from 'react'
import { HeroSection } from '../../src/components/HeroSection'

// ── Shared translation dictionaries ───────────────────────────────────────────

const tES: Record<string, string> = {
  'hero.eyebrow': 'Fase de crecimiento · España y México',
  'hero.title': 'Encuentra tu <em>Match</em> deportivo.',
  'hero.sub': 'La plataforma que conecta jugadores, profesionales y clubes de toda España. Perfiles verificados, contacto directo, sin ruido.',
  'hero.cta.secondary': 'Regístrate gratis',
  'hero.meta.free': '<strong>App gratis</strong> · iOS y Android',
  'hero.chip.player': 'Marc · Jugador disponible',
  'hero.chip.club': 'CF. Vilanova · Vacante deportiva',
  'store.available': 'Disponible en',
  'store.appstore': 'App Store',
  'store.googleplay': 'Google Play',
}

const tCA: Record<string, string> = {
  'hero.eyebrow': 'Fase de creixement · Espanya i Mèxic',
  'hero.title': 'Troba el teu <em>Match</em> esportiu.',
  'hero.sub': 'La plataforma que connecta jugadors, professionals i clubs de tot Espanya. Perfils verificats, contacte directe, sense soroll.',
  'hero.cta.secondary': "Registra't gratis",
  'hero.meta.free': '<strong>App gratuïta</strong> · iOS i Android',
  'hero.chip.player': 'Marc · Jugador disponible',
  'hero.chip.club': 'CF. Vilanova · Vacant esportiva',
  'store.available': 'Disponible a',
  'store.appstore': 'App Store',
  'store.googleplay': 'Google Play',
}

const tEN: Record<string, string> = {
  'hero.eyebrow': 'Growth phase · Spain & Mexico',
  'hero.title': 'Find your sports <em>Match</em>.',
  'hero.sub': 'The platform connecting players, professionals and clubs across Spain. Verified profiles, direct contact, no noise.',
  'hero.cta.secondary': 'Sign up free',
  'hero.meta.free': '<strong>Free app</strong> · iOS & Android',
  'hero.chip.player': 'Marc · Player available',
  'hero.chip.club': 'CF. Vilanova · Open position',
  'store.available': 'Available on',
  'store.appstore': 'App Store',
  'store.googleplay': 'Google Play',
}

// ── T15 — ES locale assertions ─────────────────────────────────────────────────

it('T15a — HeroSection(es): eyebrow contains "Fase de crecimiento"', () => {
  render(createElement(HeroSection, { t: tES }))
  const eyebrow = document.querySelector('.eyebrow')
  expect(eyebrow?.textContent).toContain('Fase de crecimiento')
})

it('T15b — HeroSection(es): h1 contains an <em> element', () => {
  render(createElement(HeroSection, { t: tES }))
  const h1 = document.querySelector('h1.hero__title')
  expect(h1).not.toBeNull()
  expect(h1?.querySelector('em')).not.toBeNull()
})

it('T15c — HeroSection(es): App Store button present with aria-label', () => {
  render(createElement(HeroSection, { t: tES }))
  expect(screen.getByRole('link', { name: 'App Store' })).toBeInTheDocument()
})

it('T15c — HeroSection(es): Google Play button present with aria-label', () => {
  render(createElement(HeroSection, { t: tES }))
  expect(screen.getByRole('link', { name: 'Google Play' })).toBeInTheDocument()
})

it('T15d — HeroSection(es): ghost CTA text matches "Regístrate gratis"', () => {
  render(createElement(HeroSection, { t: tES }))
  expect(screen.getByRole('link', { name: 'Regístrate gratis' })).toBeInTheDocument()
})

it('T15e — HeroSection(es): meta-pill contains "App gratis"', () => {
  render(createElement(HeroSection, { t: tES }))
  const metaPill = document.querySelector('.hero__meta')
  expect(metaPill?.textContent).toContain('App gratis')
})

it('T15f — HeroSection(es): two chip elements present', () => {
  render(createElement(HeroSection, { t: tES }))
  const chips = document.querySelectorAll('.hero__chip')
  expect(chips).toHaveLength(2)
})

it('T15g — HeroSection(es): hero image src is /assets/hero-home.jpg', () => {
  render(createElement(HeroSection, { t: tES }))
  const img = document.querySelector('.hero__photo') as HTMLImageElement | null
  expect(img).not.toBeNull()
  expect(img?.getAttribute('src')).toBe('/assets/hero-home.jpg')
})

// ── T16 — CA locale assertions ─────────────────────────────────────────────────

it('T16a — HeroSection(ca): eyebrow contains "Fase de creixement"', () => {
  render(createElement(HeroSection, { t: tCA }))
  const eyebrow = document.querySelector('.eyebrow')
  expect(eyebrow?.textContent).toContain('Fase de creixement')
})

it('T16b — HeroSection(ca): h1 text contains "esportiu"', () => {
  render(createElement(HeroSection, { t: tCA }))
  const h1 = document.querySelector('h1.hero__title')
  expect(h1?.textContent).toContain('esportiu')
})

// ── T17 — EN locale assertions ─────────────────────────────────────────────────

it('T17a — HeroSection(en): eyebrow contains "Growth phase"', () => {
  render(createElement(HeroSection, { t: tEN }))
  const eyebrow = document.querySelector('.eyebrow')
  expect(eyebrow?.textContent).toContain('Growth phase')
})

it('T17b — HeroSection(en): ghost CTA text matches "Sign up free"', () => {
  render(createElement(HeroSection, { t: tEN }))
  expect(screen.getByRole('link', { name: 'Sign up free' })).toBeInTheDocument()
})
