import { getAuthToken } from './get-auth-token.js'

test('returns the authentication token on successful authentication', async () => {
  await getAuthToken({
    email: 'kody@epicweb.dev',
    password: 'supersecret123',
  })
})
