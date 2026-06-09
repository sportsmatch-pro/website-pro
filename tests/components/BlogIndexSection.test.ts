// T6 — BlogIndexSection unit tests (R28)
// Tests use the React stub BlogIndexSection.tsx, not the Astro component.

import { render } from '@testing-library/react'
import { createElement } from 'react'
import { BlogIndexSection } from '../../src/components/BlogIndexSection'

const mockT: Record<string, string> = {
  'blog.index.eyebrow': 'Blog deportivo',
  'blog.index.title': 'Últimas noticias',
  'blog.index.pagination.prev': 'Anterior',
  'blog.index.pagination.next': 'Siguiente',
  'blog.index.pagination.of': 'de',
}

const mockPosts = [
  {
    slug: 'primer-articulo-deportivo',
    title: 'Cómo encontrar tu club ideal con SportsMatch',
    category: 'Consejos',
    date: '2026-01-15',
    excerpt: 'Descubre las mejores estrategias para conectar con clubes deportivos de tu zona.',
  },
  {
    slug: 'novedades-plataforma',
    title: 'Novedades en la plataforma: nuevos deportes disponibles',
    category: 'Novedades',
    date: '2026-02-10',
    excerpt: 'Ampliamos la oferta deportiva con handball, voleibol y más.',
  },
]

it('T6a — BlogIndexSection: renders an element with class "eyebrow"', () => {
  render(
    createElement(BlogIndexSection, {
      t: mockT,
      lang: 'es',
      posts: mockPosts,
      blogBasePath: '/blog',
    })
  )
  const eyebrow = document.querySelector('.eyebrow')
  expect(eyebrow).not.toBeNull()
  expect(eyebrow?.textContent).toContain('Blog deportivo')
})

it('T6b — BlogIndexSection: renders at least one article with class "blog-card"', () => {
  render(
    createElement(BlogIndexSection, {
      t: mockT,
      lang: 'es',
      posts: mockPosts,
      blogBasePath: '/blog',
    })
  )
  const cards = document.querySelectorAll('.blog-card')
  expect(cards.length).toBeGreaterThanOrEqual(1)
})

it('T6c — BlogIndexSection: renders a pagination nav', () => {
  render(
    createElement(BlogIndexSection, {
      t: mockT,
      lang: 'es',
      posts: mockPosts,
      blogBasePath: '/blog',
    })
  )
  const nav = document.querySelector('nav[aria-label="pagination"]')
  expect(nav).not.toBeNull()
})
