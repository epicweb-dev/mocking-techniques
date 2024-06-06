import { handleRequest } from './handle-request.js'

vi.mock('./logger.js', () => {
  return {
    logger: {
      info: () => {},
      warn: () => {},
      error: () => {},
    },
  } satisfies typeof import('./logger.js')
})

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
