import { getAuthToken } from './get-auth-token.js'

test('returns the authentication token on successful authentication', async () => {
  const { token } = await getAuthToken({
    email: 'kody@epicweb.dev',
    password: 'supersecret123',
  })
  expect(token).toBe('abc-123')
})
