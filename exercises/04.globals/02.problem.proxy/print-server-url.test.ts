import { printServerUrl } from './print-server-url.js'

const originalConsoleLog = globalThis.console.log
const consoleLogSpy = vi.fn<Parameters<typeof console.log>>()

beforeAll(() => {
  // 💣 Remove this assignment.
  globalThis.console.log = consoleLogSpy

  // 🐨 Create a new Proxy over `globalThis.console.log`
  // and provide it the `apply` trap for it to handle the `log` method calls.
  // 💰 new Proxy(globalThis.console.log, { apply(target, thisArg, args) {} })

  // 🐨 In the proxy's `apply` trap, call the `consoleLogSpy` with the
  // same arguments that were passed to the trap method.
  // 💰 apply(target, thisArg, args) { consoleLogSpy.apply(this, arguments) }

  // 🐨 Reassign the value of `globalThis.console.log` to the proxy.
  // 💰 globalThis.console.log = new Proxy(...)
})

afterEach(() => {
  consoleLogSpy.mockReset()
})

afterAll(() => {
  globalThis.console.log = originalConsoleLog
})

test('prints the server message for url with host and no port', () => {
  printServerUrl({ host: '127.0.0.1' })

  expect(consoleLogSpy).toHaveBeenCalledWith(
    'Sever is listening at http://127.0.0.1/',
  )
  expect(consoleLogSpy).toHaveBeenCalledOnce()
})

test('prints the server message for url with host and port', () => {
  printServerUrl({ host: '127.0.0.1', port: 5639 })

  expect(consoleLogSpy).toHaveBeenCalledWith(
    'Sever is listening at http://127.0.0.1:5639/',
  )
  expect(consoleLogSpy).toHaveBeenCalledOnce()
})
