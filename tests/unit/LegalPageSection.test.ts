// T5 — LegalPageSection unit tests
// Tests use the React stub LegalPageSection.tsx, not the Astro component.

import { render } from '@testing-library/react'
import { createElement } from 'react'
import { LegalPageSection } from '../../src/components/LegalPageSection'

const t: Record<string, string> = {
  'legal.privacy.title': 'Política de Privacidad',
  'legal.privacy.desc': 'Conoce cómo SportsMatch trata tus datos personales.',
  'legal.privacy.updated': 'Última actualización: 1 de enero de 2025',
  'legal.privacy.content': 'En SportsMatch nos comprometemos a proteger tu privacidad.',
}

// (a) <h1> contains the title text
it('T5a — LegalPageSection: h1 contains the title text', () => {
  render(
    createElement(LegalPageSection, {
      t,
      titleKey: 'legal.privacy.title',
      descKey: 'legal.privacy.desc',
      updatedKey: 'legal.privacy.updated',
      contentKey: 'legal.privacy.content',
    })
  )
  const h1 = document.querySelector('h1')
  expect(h1).not.toBeNull()
  expect(h1?.textContent).toContain('Política de Privacidad')
})

// (b) updated date text is present
it('T5b — LegalPageSection: updated date text is present', () => {
  render(
    createElement(LegalPageSection, {
      t,
      titleKey: 'legal.privacy.title',
      descKey: 'legal.privacy.desc',
      updatedKey: 'legal.privacy.updated',
      contentKey: 'legal.privacy.content',
    })
  )
  const p = document.querySelector('p')
  expect(p).not.toBeNull()
  expect(p?.textContent).toContain('Última actualización: 1 de enero de 2025')
})

// (c) content text is present
it('T5c — LegalPageSection: content text is present', () => {
  render(
    createElement(LegalPageSection, {
      t,
      titleKey: 'legal.privacy.title',
      descKey: 'legal.privacy.desc',
      updatedKey: 'legal.privacy.updated',
      contentKey: 'legal.privacy.content',
    })
  )
  const div = document.querySelector('div.leading-relaxed')
  expect(div).not.toBeNull()
  expect(div?.textContent).toContain('En SportsMatch nos comprometemos a proteger tu privacidad.')
})
