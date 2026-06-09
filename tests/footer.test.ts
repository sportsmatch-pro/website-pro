import { render, screen } from '@testing-library/react'
import { createElement } from 'react'
import { Footer } from '../src/components/Footer'

// T14 — Footer component tests (R40)

it('renders without errors and contains main-footer element', () => {
  render(createElement(Footer, {}))
  expect(screen.getByTestId('main-footer')).toBeInTheDocument()
})

it('renders 5 column headings (brand, Producto, Empresa, Comunidad, Legal)', () => {
  render(createElement(Footer, { lang: 'es' }))
  // Check brand (SportsMatch link)
  expect(screen.getByRole('link', { name: 'SportsMatch' })).toBeInTheDocument()
  // Check the 4 labelled columns
  expect(screen.getByText('Producto')).toBeInTheDocument()
  expect(screen.getByText('Empresa')).toBeInTheDocument()
  expect(screen.getByText('Comunidad')).toBeInTheDocument()
  expect(screen.getByText('Legal')).toBeInTheDocument()
})

it('bottom bar contains copyright string with "SportsMatch"', () => {
  render(createElement(Footer, { lang: 'es' }))
  const copyright = screen.getByText(/SportsMatch.*Barcelona|Barcelona.*SportsMatch/i)
  expect(copyright).toBeInTheDocument()
})

it('bottom bar contains mailto link to info@sportsmatch.pro', () => {
  render(createElement(Footer, { lang: 'es' }))
  const emailLink = screen.getByRole('link', { name: /info@sportsmatch\.pro/i })
  expect(emailLink).toBeInTheDocument()
  expect(emailLink).toHaveAttribute('href', 'mailto:info@sportsmatch.pro')
})

it('Producto column lists 5 links', () => {
  render(createElement(Footer, { lang: 'es' }))
  const productCol = screen.getByText('Producto').closest('[data-column="product"]')
  expect(productCol).not.toBeNull()
  const links = productCol!.querySelectorAll('a')
  expect(links).toHaveLength(5)
})

it('Empresa column lists Nosotros, Blog, Prensa, Contacto', () => {
  render(createElement(Footer, { lang: 'es' }))
  expect(screen.getByText('Nosotros')).toBeInTheDocument()
  expect(screen.getByText('Blog')).toBeInTheDocument()
  expect(screen.getByText('Prensa')).toBeInTheDocument()
  expect(screen.getByText('Contacto')).toBeInTheDocument()
})

it('Comunidad column lists social network links', () => {
  render(createElement(Footer, { lang: 'es' }))
  expect(screen.getByText('Instagram')).toBeInTheDocument()
  expect(screen.getByText('TikTok')).toBeInTheDocument()
  expect(screen.getByText('LinkedIn')).toBeInTheDocument()
})

it('Legal column lists privacy, terms, cookies, GDPR', () => {
  render(createElement(Footer, { lang: 'es' }))
  expect(screen.getByText('Privacidad')).toBeInTheDocument()
  expect(screen.getByText('Términos')).toBeInTheDocument()
  expect(screen.getByText('Cookies')).toBeInTheDocument()
  expect(screen.getByText('GDPR')).toBeInTheDocument()
})
