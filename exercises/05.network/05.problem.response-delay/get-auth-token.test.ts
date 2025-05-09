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

// 🐨 Create a new test case to check how the `getAuthToken` function
// handler the request timeout.
// 💰 test(title, callback)

// 🐨 In the new test case, add a runtime handler for the auth token
// endpoint and respond to the request with the `delay` function.
// Use `delay('infinite')` to make the request pend forever.
// 💰 server.use(handler)

// 🐨 Next, complete the test by calling the `getAuthToken`
// and writing the assertion around the correct rejection error.
// 💰 You may want to mock *time* here.
