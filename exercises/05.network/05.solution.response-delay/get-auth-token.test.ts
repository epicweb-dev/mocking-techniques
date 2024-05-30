import { http, delay } from 'msw'
import { server } from './mocks/node.js'
import { getAuthToken } from './get-auth-token.js'

beforeAll(() => {
  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

test('returns the authentication token on successful authentication', async () => {
  await expect(
    getAuthToken({
      email: 'kody@epicweb.dev',
      password: 'supersecret123',
    }),
  ).resolves.toEqual({ token: 'abc-123' })
})

test('throws an error if the user credentials are invalid', async () => {
  server.use(
    http.post('https://api.example.com/auth', () => {
      return new Response(null, { status: 401 })
    }),
  )

  await expect(() =>
    getAuthToken({
      email: 'kody@epicweb.dev',
      password: 'supersecret123',
    }),
  ).rejects.toThrow('Authentication failed: invalid credentials')
})

test('throws an error if the server responds with an error', async () => {
  server.use(
    http.post('https://api.example.com/auth', () => {
      return new Response(null, { status: 500 })
    }),
  )

  await expect(() =>
    getAuthToken({
      email: 'kody@epicweb.dev',
      password: 'supersecret123',
    }),
  ).rejects.toThrow('Authentication failed: network error')
})

test('handles network errors', async () => {
  server.use(
    http.post('https://api.example.com/auth', () => {
      return Response.error()
    }),
  )

  await expect(() =>
    getAuthToken({
      email: 'kody@epicweb.dev',
      password: 'supersecret123',
    }),
  ).rejects.toThrow('Authentication failed: network error')
})

test('handles the request timeout', async () => {
  server.use(
    http.post('https://api.example.com/auth', async () => {
      await delay('infinite')
    }),
  )

  const tokenPromise = getAuthToken({
    email: 'kody@epicweb.dev',
    password: 'supersecret123',
  })

  vi.advanceTimersByTime(3000)

  await expect(tokenPromise).rejects.toThrow(
    'Authentication failed: request timed out',
  )
})
