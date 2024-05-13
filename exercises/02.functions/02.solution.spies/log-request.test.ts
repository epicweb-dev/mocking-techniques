import { logRequest } from './log-request.js'

beforeAll(() => {
  vi.spyOn(console, 'log')
})

afterEach(() => {
  vi.resetAllMocks()
})

afterAll(() => {
  vi.restoreAllMocks()
})

test('logs the given request in the console', async () => {
  const request = new Request('https://epicweb.dev/mocking-techniques', {
    method: 'POST',
    body: 'hello world',
  })
  await logRequest(request)

  expect(console.log).toHaveBeenNthCalledWith(1, 'POST /mocking-techniques')
  expect(console.log).toHaveBeenNthCalledWith(2, 'hello world')
  expect(console.log).toHaveBeenCalledTimes(2)
})
