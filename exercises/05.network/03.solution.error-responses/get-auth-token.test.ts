import { http } from 'msw'
import { server } from './mocks/node.js'
import { getAuthToken } from './get-auth-token.js'

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

  await expect(getAuthToken).rejects.toThrow(
    'Authentication failed: invalid credentials',
  )
})

test('throws an error if the server responds with an error', async () => {
  server.use(
    http.post('https://api.example.com/auth', () => {
      return new Response(null, { status: 500 })
    }),
  )

  await expect(getAuthToken).rejects.toThrow(
    'Authentication failed: network error',
  )
})
