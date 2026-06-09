// T9 — HTTP integration tests for legal routes (R10–R21, R28)
// Reuses the globalSetup.ts build + preview server (same as http.test.ts).

const BASE_URL = 'http://localhost:4321'

const LEGAL_ROUTES = [
  '/politica-de-privacidad',
  '/terminos',
  '/cookies',
  '/aviso-legal',
  '/ca/politica-de-privacitat',
  '/ca/termes',
  '/ca/cookies',
  '/ca/avis-legal',
  '/en/privacy-policy',
  '/en/terms',
  '/en/cookies',
  '/en/legal',
]

for (const route of LEGAL_ROUTES) {
  it(`GET ${route} returns 200`, async () => {
    const res = await fetch(`${BASE_URL}${route}`)
    expect(res.status).toBe(200)
  })
}
