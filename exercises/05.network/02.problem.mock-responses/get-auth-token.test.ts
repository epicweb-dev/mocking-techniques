import { getAuthToken } from './get-auth-token.js'

test('returns the authentication token on successful authentication', async () => {
  // 🐨 Destructure the object returned from the `getAuthToken` call,
  // and access its `token` property.
  // 💰 const { token } = await getAuthToken(...)
  await getAuthToken({
    email: 'kody@epicweb.dev',
    password: 'supersecret123',
  })

  // 🐨 Write an assertion for the `token` variable
  // to equal to token returned from the mock.
  // 💰 expect(actual).toBe(expected)
})
