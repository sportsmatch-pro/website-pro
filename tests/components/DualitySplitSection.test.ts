// T18 — DualitySplitSection unit tests

import { render, screen } from '@testing-library/react'
import { createElement } from 'react'
import { DualitySplitSection } from '../../src/components/DualitySplitSection'

const tES: Record<string, string> = {
  'duality.eyebrow': 'Dos caminos. Una plataforma.',
  'duality.title': 'Da igual de qué lado del campo estés.',
  'duality.club.tag': 'Clubes y Scouts',
  'duality.club.title': 'Encuentra <i>talento</i> deportivo.',
  'duality.club.desc': 'Publica necesidades deportivas, filtra perfiles y conecta con jugadores y profesionales sin depender solo del boca a boca.',
  'duality.club.b1': 'Acceso a perfiles con informació y qualidades',
  'duality.club.b2': 'Gestión centralizada de vacantes y respuestas',
  'duality.club.b3': 'Visibilidad pública del club en búsquedas',
  'duality.club.cta': 'Crea el perfil de tu club',
  'duality.player.tag': 'Jugadores o profesionales',
  'duality.player.title': 'No esperes a que te <i>descubran</i>.',
  'duality.player.desc': 'Crea tu perfil deportivo, gana visibilidad y accede a oportunidades publicadas por clubes.',
  'duality.player.b1': 'Perfil con información y qualidades',
  'duality.player.b2': 'Publica tus jugadas y gana visibilidad',
  'duality.player.b3': 'Notificaciones cuando un club te abre la puerta',
  'duality.player.cta': 'Crea tu perfil gratuito',
}

it('T18a — DualitySplitSection(es): eyebrow contains "Dos caminos"', () => {
  render(createElement(DualitySplitSection, { t: tES }))
  const eyebrow = document.querySelector('.eyebrow')
  expect(eyebrow?.textContent).toContain('Dos caminos')
})

it('T18b — DualitySplitSection(es): h2 text contains "Da igual"', () => {
  render(createElement(DualitySplitSection, { t: tES }))
  const h2 = document.querySelector('h2.duality-split__heading')
  expect(h2?.textContent).toContain('Da igual')
})

it('T18c — DualitySplitSection(es): clubs side h3 contains <i> and text "talento"', () => {
  render(createElement(DualitySplitSection, { t: tES }))
  const clubSide = document.querySelector('.duality-split__side--club')
  expect(clubSide).not.toBeNull()
  const h3 = clubSide?.querySelector('h3')
  expect(h3).not.toBeNull()
  expect(h3?.querySelector('i')).not.toBeNull()
  expect(h3?.textContent).toContain('talento')
})

it('T18d — DualitySplitSection(es): players side h3 contains <i> and text "descubran"', () => {
  render(createElement(DualitySplitSection, { t: tES }))
  const playerSide = document.querySelector('.duality-split__side--player')
  expect(playerSide).not.toBeNull()
  const h3 = playerSide?.querySelector('h3')
  expect(h3).not.toBeNull()
  expect(h3?.querySelector('i')).not.toBeNull()
  expect(h3?.textContent).toContain('descubran')
})

it('T18e — DualitySplitSection(es): clubs side <ul> has exactly 3 <li> items', () => {
  render(createElement(DualitySplitSection, { t: tES }))
  const clubSide = document.querySelector('.duality-split__side--club')
  const bullets = clubSide?.querySelectorAll('ul.duality-split__bullets li')
  expect(bullets).toHaveLength(3)
})

it('T18f — DualitySplitSection(es): players side <ul> has exactly 3 <li> items', () => {
  render(createElement(DualitySplitSection, { t: tES }))
  const playerSide = document.querySelector('.duality-split__side--player')
  const bullets = playerSide?.querySelectorAll('ul.duality-split__bullets li')
  expect(bullets).toHaveLength(3)
})

it('T18g — DualitySplitSection(es): two arrow CTA links present', () => {
  render(createElement(DualitySplitSection, { t: tES }))
  const ctaLinks = document.querySelectorAll('a.duality-split__side')
  expect(ctaLinks).toHaveLength(2)
})

it('T18h — DualitySplitSection(es): central divider has aria-hidden="true"', () => {
  render(createElement(DualitySplitSection, { t: tES }))
  const divider = document.querySelector('.duality-split__divider')
  expect(divider).not.toBeNull()
  expect(divider?.getAttribute('aria-hidden')).toBe('true')
})
