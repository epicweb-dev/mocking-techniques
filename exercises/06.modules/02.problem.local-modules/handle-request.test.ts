import { handleRequest } from './handle-request.js'

// 🐨 Mock the "./logger.js" module using the `vi.mock()` function.
// 💰 vi.mock(path, () => {})

// 🐨 Inside the mock factory (the second argument to `vi.mock`),
// return an object matching the exports of "./logger.js". You
// can use empty functions as the values of "info", "warn", and
// "error" methods of the "logger" object!
// 💰 return { logger: {} }
//
// 💰 You can make the mock module factory type-safe by
// making it satisfy the type of the original module.
// 💰 return {} satisfies typeof import('./logger.js')

test('returns the successful response for an authorized request', async () => {
  const response = await handleRequest(
    new Request('http://example.com', {
      headers: {
        authorization: 'Bearer AUTH_TOKEN',
      },
    }),
  )
  expect(await response.json()).toEqual({ ok: true })
})

test('throws an error for an unauthorized request', async () => {
  await expect(
    handleRequest(new Request('http://example.com')),
  ).rejects.toThrow(
    'Cannot handle the "GET" request to "http://example.com/": not authorized',
  )
})
