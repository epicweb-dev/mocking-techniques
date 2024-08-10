import { printServerUrl } from './print-server-url.js'

beforeAll(() => {
  // 🐨 Create a spy over `console.log` using `vi.spyOn()`.
  // You can call `.mockImplementation(() => {})` on the spy to silence
  // the `console.log` calls.
  // 💰 vi.spyOn(target, methodName)
})

afterEach(() => {
  // 🐨 Reset all mocks using `vi.resetAllMocks()` function.
})

afterAll(() => {
  // 🐨 Restore all mocked globals by calling `vi.restoreAllMocks()`.
})

test('prints the server message for url with host and no port', () => {
  printServerUrl({ host: '127.0.0.1' })

  // 🐨 Write an assertion that checks that `console.log`
  // has been called once with the correct message.
  // 💰 expect(console.log).toHaveBeenCalledWith(args)
})

test('prints the server message for url with host and port', () => {
  printServerUrl({ host: '127.0.0.1', port: 5639 })

  // 🐨 Similarly, add an assertion that checks that `console.log`
  // has been called with the URL that includes the host and port.
})
