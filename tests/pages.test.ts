const BASE_URL = 'http://localhost:4321'

it('GET /about returns 200', async () => {
  const res = await fetch(`${BASE_URL}/about`)
  expect(res.status).toBe(200)
})
