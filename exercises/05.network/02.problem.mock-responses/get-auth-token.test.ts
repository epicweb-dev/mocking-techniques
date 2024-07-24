import { getAuthToken } from './get-auth-token.js'

test('returns the authentication token on successful authentication', async () => {
  // 🐨 Wrap ths `getAuthToken` promise in the `expect` function
  // and assert that it resolves with an object containing
  // a `token` property.
  // 💰 await expect(promise).resolves.toEqual({})
  await getAuthToken({
    email: 'kody@epicweb.dev',
    password: 'supersecret123',
  })
})
