import { handleRequest } from './handle-request.js'

// 🐨 Mock the "./logger.js" module using the `vi.mock()` function.
// You can skip the module factory to let Vitest auto-mock
// the "./logger.js" module for you.
// 💰 vi.mock(path)

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
