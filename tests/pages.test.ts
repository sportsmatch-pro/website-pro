// HTTP smoke tests for key pages
const BASE_URL = 'http://localhost:4321'

it('GET / returns 200', async () => {
  const res = await fetch(`${BASE_URL}/`)
  expect(res.status).toBe(200)
})

it('GET /ca returns 200', async () => {
  const res = await fetch(`${BASE_URL}/ca`)
  expect(res.status).toBe(200)
})

it('GET /en returns 200', async () => {
  const res = await fetch(`${BASE_URL}/en`)
  expect(res.status).toBe(200)
})

it('GET /acceder returns 200', async () => {
  const res = await fetch(`${BASE_URL}/acceder`)
  expect(res.status).toBe(200)
})

it('GET /cookies returns 200', async () => {
  const res = await fetch(`${BASE_URL}/cookies`)
  expect(res.status).toBe(200)
})
