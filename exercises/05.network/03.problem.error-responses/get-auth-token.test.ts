// 🐨 Import the `server` variable from "./mocks/node.js".
// 🦉 Keep in mind that ESM imports must have ".js" extension
// even if you are referencing TypeScript files.
// 💰 import { something } from './somewhere.js'
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
  // 🐨 Call `server.use()` and provide it with a runtime handler.
  // In that handler, intercept the same "POST https://api.example.com/auth"
  // request but respond with a 401 response instead.
  // 💰 server.use(...)
  // 💰 http.post(path, resolver)
  // 💰 new Response(null, { status: 401 })

  await expect(() =>
    getAuthToken({
      email: 'kody@epicweb.dev',
      password: 'supersecret123',
    }),
  ).rejects.toThrow('Authentication failed: invalid credentials')
})

test('throws an error if the server responds with an error', async () => {
  // 🐨 Similarly, call `server.use()` and provide it with another runtime handler,
  // this time responding with a 500 response.
  // 💰 new Response(null, { status: 500 })

  await expect(() =>
    getAuthToken({
      email: 'kody@epicweb.dev',
      password: 'supersecret123',
    }),
  ).rejects.toThrow('Authentication failed: network error')
})
