/**
 * Unit tests for src/scripts/theme.ts — initThemeToggle()
 * Covers: R5, R6, R7
 *
 * Environment: jsdom (configured in vitest.config.ts)
 */

import { initThemeToggle } from '../src/scripts/theme'

// jsdom does not implement matchMedia — provide a stub so theme.ts does not throw
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  })
})

function setupToggleButton(): HTMLButtonElement {
  document.documentElement.removeAttribute('data-theme')
  localStorage.clear()

  const btn = document.createElement('button')
  btn.setAttribute('data-theme-toggle', '')
  document.body.appendChild(btn)
  return btn
}

afterEach(() => {
  // Clean up DOM and storage after each test
  document.body.innerHTML = ''
  document.documentElement.removeAttribute('data-theme')
  localStorage.clear()
})

// R5 — clicking the toggle cycles data-theme through light → dark → system (removed)
describe('R5 — theme cycle on click', () => {
  it('cycles from system (no attribute) → light on first click', () => {
    const btn = setupToggleButton()
    initThemeToggle()

    btn.click()
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('cycles from light → dark on second click', () => {
    const btn = setupToggleButton()
    initThemeToggle()

    btn.click() // → light
    btn.click() // → dark
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('cycles from dark → system (attribute removed) on third click', () => {
    const btn = setupToggleButton()
    initThemeToggle()

    btn.click() // → light
    btn.click() // → dark
    btn.click() // → system
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
  })
})

// R6 — after setting light or dark, localStorage reflects the correct value
describe('R6 — localStorage persistence for light/dark', () => {
  it('stores "light" in localStorage after cycling to light', () => {
    const btn = setupToggleButton()
    initThemeToggle()

    btn.click() // → light
    expect(localStorage.getItem('sm-theme')).toBe('light')
  })

  it('stores "dark" in localStorage after cycling to dark', () => {
    const btn = setupToggleButton()
    initThemeToggle()

    btn.click() // → light
    btn.click() // → dark
    expect(localStorage.getItem('sm-theme')).toBe('dark')
  })
})

// R7 — after cycling to system, localStorage key is null and <html> has no data-theme
describe('R7 — system mode removes localStorage key and data-theme attribute', () => {
  it('removes sm-theme from localStorage when theme is system', () => {
    const btn = setupToggleButton()
    initThemeToggle()

    btn.click() // → light (persisted)
    btn.click() // → dark  (persisted)
    btn.click() // → system (removed)

    expect(localStorage.getItem('sm-theme')).toBeNull()
  })

  it('removes data-theme attribute from <html> when theme is system', () => {
    const btn = setupToggleButton()
    initThemeToggle()

    btn.click() // → light
    btn.click() // → dark
    btn.click() // → system

    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
  })
})
