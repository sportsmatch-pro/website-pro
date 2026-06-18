import { getViteConfig } from 'astro/config'
import react from '@vitejs/plugin-react'

// getViteConfig wires Astro's compiler so `.astro` components can be imported
// in tests (e.g. via the experimental Container API), while keeping the React
// plugin for the existing React-stub component tests.
export default getViteConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
    globalSetup: ['./tests/globalSetup.ts'],
  },
})
