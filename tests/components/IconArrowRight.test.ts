// T20 — IconArrowRight unit test (R31)

import { render } from '@testing-library/react'
import { createElement } from 'react'
import { IconArrowRight } from '../../src/components/IconArrowRight'

it('T20a — IconArrowRight: SVG path d attribute equals M5 12h14M13 5l7 7-7 7', () => {
  render(createElement(IconArrowRight, {}))
  const path = document.querySelector('path')
  expect(path).not.toBeNull()
  expect(path?.getAttribute('d')).toBe('M5 12h14M13 5l7 7-7 7')
})

it('T20b — IconArrowRight: aria-hidden is "true"', () => {
  render(createElement(IconArrowRight, {}))
  const svg = document.querySelector('svg')
  expect(svg).not.toBeNull()
  expect(svg?.getAttribute('aria-hidden')).toBe('true')
})
