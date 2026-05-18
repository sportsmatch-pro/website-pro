import { render, screen } from '@testing-library/react'
import { Header } from '../src/components/Header'

it('renders without errors and contains main-header element', () => {
  render(<Header />)
  expect(screen.getByTestId('main-header')).toBeInTheDocument()
})
