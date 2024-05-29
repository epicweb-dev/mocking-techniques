import { getAuthToken } from './get-auth-token.js'

test('returns the authentication token on successful authentication', async () => {
  await expect(
    getAuthToken({
      email: 'kody@epicweb.dev',
      password: 'supersecret123',
    }),
  ).resolves.toEqual({ token: 'abc-123' })
})
