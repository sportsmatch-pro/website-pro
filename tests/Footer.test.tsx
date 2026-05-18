import { render, screen } from '@testing-library/react'
import { Footer } from '../src/components/Footer'

it('renders without errors and contains main-footer element', () => {
  render(<Footer />)
  expect(screen.getByTestId('main-footer')).toBeInTheDocument()
})
