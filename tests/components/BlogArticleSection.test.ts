// T7 — BlogArticleSection unit tests (R29)
// Tests use the React stub BlogArticleSection.tsx, not the Astro component.

import { render } from '@testing-library/react'
import { createElement } from 'react'
import { BlogArticleSection } from '../../src/components/BlogArticleSection'

const mockT: Record<string, string> = {
  'blog.article.breadcrumb.blog': 'Blog',
  'blog.article.category.placeholder': 'General',
  'blog.article.content.placeholder': 'Contenido del artículo próximamente.',
}

const mockArticle = {
  slug: 'primer-articulo-deportivo',
  title: 'Cómo encontrar tu club ideal con SportsMatch',
  category: 'Consejos',
  date: '2026-01-15',
  excerpt: 'Descubre las mejores estrategias para conectar con clubes deportivos de tu zona.',
}

it('T7a — BlogArticleSection: renders a breadcrumb with data-testid="breadcrumb"', () => {
  render(
    createElement(BlogArticleSection, {
      t: mockT,
      lang: 'es',
      article: mockArticle,
      blogBasePath: '/blog',
    })
  )
  const breadcrumb = document.querySelector('[data-testid="breadcrumb"]')
  expect(breadcrumb).not.toBeNull()
})

it('T7b — BlogArticleSection: h1 contains the mock article title', () => {
  render(
    createElement(BlogArticleSection, {
      t: mockT,
      lang: 'es',
      article: mockArticle,
      blogBasePath: '/blog',
    })
  )
  const h1 = document.querySelector('h1')
  expect(h1).not.toBeNull()
  expect(h1?.textContent).toContain('Cómo encontrar tu club ideal con SportsMatch')
})

it('T7c — BlogArticleSection: renders article-category element with mock category', () => {
  render(
    createElement(BlogArticleSection, {
      t: mockT,
      lang: 'es',
      article: mockArticle,
      blogBasePath: '/blog',
    })
  )
  const category = document.querySelector('.article-category')
  expect(category).not.toBeNull()
  expect(category?.textContent).toContain('Consejos')
})

it('T7d — BlogArticleSection: renders a <time> element', () => {
  render(
    createElement(BlogArticleSection, {
      t: mockT,
      lang: 'es',
      article: mockArticle,
      blogBasePath: '/blog',
    })
  )
  const time = document.querySelector('time')
  expect(time).not.toBeNull()
})
