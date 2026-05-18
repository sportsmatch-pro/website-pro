const BASE_URL = 'http://localhost:4321'

it('GET / returns 200', async () => {
  const res = await fetch(`${BASE_URL}/`)
  expect(res.status).toBe(200)
})

it('GET / HTML contains data-testid main-header', async () => {
  const res = await fetch(`${BASE_URL}/`)
  const html = await res.text()
  expect(html).toContain('data-testid="main-header"')
})

it('GET /404 returns 404', async () => {
  const res = await fetch(`${BASE_URL}/404`)
  expect(res.status).toBe(404)
})
